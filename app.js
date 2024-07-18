document.addEventListener("DOMContentLoaded", () => {
    // Fetch memes and videos from the JSON server
    fetchMemes();
    fetchVideos();
  
    // Event listeners for dark/light mode toggle
    const toggleBall = document.querySelector('.toggle-ball-light');
    toggleBall.addEventListener('click', toggleTheme);
  });
  
  // Fetch memes from the server
  function fetchMemes() {
    fetch('http://localhost:3000/memes')
      .then(response => response.json())
      .then(memes => {
        displayMemes(memes);
      });
  }
  
  // Display memes on the page
  function displayMemes(memes) {
    const container = document.querySelector('.window-container');
    container.innerHTML = '<h2>Memes</h2>';
    memes.forEach(meme => {
      const memeDiv = document.createElement('div');
      memeDiv.classList.add('meme');
      memeDiv.innerHTML = `
        <img src="${meme.image}" alt="Meme">
        <p>Posted by: ${meme.user}</p>
        <p>Likes: <span class="like-count">${meme.likes}</span></p>
        <button class="like-button">Like</button>
      `;
      container.appendChild(memeDiv);
  
      const likeButton = memeDiv.querySelector('.like-button');
      likeButton.addEventListener('click', () => {
        meme.likes += 1;
        memeDiv.querySelector('.like-count').textContent = meme.likes;
        updateMemeLikes(meme);
      });
    });
  }
  
  // Update meme likes on the server
  function updateMemeLikes(meme) {
    fetch(`http://localhost:3000/memes/${meme.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: meme.likes })
    });
  }
  
  // Fetch videos from the server
  function fetchVideos() {
    fetch('http://localhost:3000/videos')
      .then(response => response.json())
      .then(videos => {
        displayVideos(videos);
      });
  }
  
  // Display videos on the page
  function displayVideos(videos) {
    const container = document.querySelector('.window-container');
    container.innerHTML += '<h2>Videos</h2>';
    videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.classList.add('video');
      videoDiv.innerHTML = `
        <a href="${video.url}" target="_blank">${video.title}</a>
        <p>Likes: <span class="like-count">${video.likes}</span></p>
        <button class="like-button">Like</button>
      `;
      container.appendChild(videoDiv);
  
      const likeButton = videoDiv.querySelector('.like-button');
      likeButton.addEventListener('click', () => {
        video.likes += 1;
        videoDiv.querySelector('.like-count').textContent = video.likes;
        updateVideoLikes(video);
      });
    });
  }
  
  // Update video likes on the server
  function updateVideoLikes(video) {
    fetch(`http://localhost:3000/videos/${video.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ likes: video.likes })
    });
  }
  
  // Toggle dark/light theme
  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
  