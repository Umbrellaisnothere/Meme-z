  // Event Listener for DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const memeList = document.getElementById('meme-list');
  const memeForm = document.getElementById('meme-form');
  const titleInput = document.getElementById('title');
  const urlInput = document.getElementById('url');

  const API_URL = 'https://meme-z-backend.vercel.app/memes';

  // 
  const ball = document.querySelector(".toggle-ball-light");
  const items = document.querySelectorAll(".container, .menu-list-items, .navbar-container, .sidebar, .sidebar-icon, .toggle")

  ball.addEventListener("click", () => {
    items.forEach(item => item.classList.toggle("active"));
    ball.classList.toggle("active");
  })

  // Fetch and display memes data
  fetch(API_URL)
      .then(response => response.json())
      .then(memes => displayMemes(memes));

  function displayMemes(memes) {
      memeList.innerHTML = memes.map(meme =>
          `<div class="meme" data-id="${meme.id}">
              <h3>${meme.title}</h3>
              <video src="${meme.url}" controls></video>
              <button class="edit">Edit</button>
              <button class="delete">Delete</button>
          </div>`
      ).join('');
  }

  // Adds new meme
  memeForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Submission behavior is not altered

      // Create a new meme object
      const newMeme = {
          title: titleInput.value,
          url: urlInput.value
      };

      fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newMeme)
      })
      .then(response => response.json())
      .then(meme => {
          memeList.innerHTML += `
              <div class="meme" data-id="${meme.id}">
                  <h3>${meme.title}</h3>
                  <video src="${meme.url}" controls></video>
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
              </div>`;
          titleInput.value = '';
          urlInput.value = '';
      });
  });

  // Edit and delete memes
  memeList.addEventListener('click', (e) => {

    // New variable created
      const memeDiv = e.target.closest('.meme');
      const id = memeDiv.dataset.id;

      if (e.target.classList.contains('edit')) {
          const title = memeDiv.querySelector('h3').innerText;
          const url = memeDiv.querySelector('video').src;
          titleInput.value = title;
          urlInput.value = url;

          memeForm.onsubmit = (e) => {
              e.preventDefault();
              const updatedMeme = {
                  title: titleInput.value,
                  url: urlInput.value
              };
              fetch(`${API_URL}/${id}`, {
                  method: 'PATCH',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updatedMeme)
              })
              .then(response => response.json())
              .then(() => {
                  memeDiv.querySelector('h3').innerText = updatedMeme.title;
                  memeDiv.querySelector('video').src = updatedMeme.url;
                  titleInput.value = '';
                  urlInput.value = '';
                  memeForm.onsubmit = null; // Remove onsubmit handler
              });
          };
      }

      if (e.target.classList.contains('delete')) {
          fetch(`${API_URL}/${id}`, {
              method: 'DELETE'
          })
          .then(() => {
              memeDiv.remove();
          });
      }
  });
});