# Phase 1 Project
-----
# Meme-z

## Description

- Meme-z is a mini-web application that allows any user to upload a short video or clip which involves memes.


## Features
Some of its features include: 

- Can display a list of memes.

- A user can add a new meme.

__Fill in the title and video URL in the form__.

__Click "Add Meme" to add the meme to the list__.

- A user can edit an existing meme.

- A user can delete a meme.

## System Requirements
- Have a version of Node 18 or Above.
- A browser capable of running JavaScript, example: Chrome, Safari, Firefox or Edge.
- An updated Operating System, example: Windows 10 or Above, MacOS, Linux, etc.
- A text editor that is capable of running JavaScript (Visual Studio Code, Vim, Nano, Emacs, Atom, Sublime Text, etc.)
- A RAM that is equal to or above 4 GB.
- A diskspace equal to or greater than 1 GB.

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

## Meme-z link
[Link]()

# Author
This project  was contributed to by;

- [Keith Murimi](https://github.com/Umbrellaisnothere).

- Meme-z is a small project that is inspired by an average meme uploader!

