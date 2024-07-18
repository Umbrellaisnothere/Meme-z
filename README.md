# Phase 1 Project
-----
# Meme-z
## Description

- Meme-z is a mini-web application that allows any user to upload a short, 5 to 45 second(s) video(s) or clip(s).
<!-- might change the above description -->

## Features
Some of its features include: 

- Can display a list of memes.
- A user can add a new meme.

__Fill in the title and video URL in the form__.

__Click "Add Meme" to add the meme to the list__.

- A user can edit an existing meme.
- A user can delete a meme.

## Setup

1. **Clone the repository:**
   git clone:
   ```
   git@github.com:Umbrellaisnothere/Meme-z.git
   ```

2. **Navigate to the project directory:**
    Open the directory which contains all the files:

        cd meme

3. **Start json-server:**    

        json-server --watch db.json

NB :- If you do not have json-server on your **global namespace** install it by using:

    npm install -g json-server


4. Open `index.html` in your browser:

**JSON Server Routes**

- GET /memes - Get all memes
- POST /memes - Add a new meme
- GET /memes/:id - Get a meme by ID
- PATCH /memes/:id - Update a meme by ID
- DELETE /memes/:id - Delete a meme by ID


- Meme-z is a small project that is inspired by an average meme uploader!