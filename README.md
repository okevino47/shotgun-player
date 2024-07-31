# shotgun-player
## Getting Started

To launch project: 
- go in a terminal in the project folder
- launch command: `yarn dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
- Playlist:
  - Create playlist
  - Delete playlist
  - Add track to playlist
  - Remove track from playlist
- Audio player :
  - Play track audio
  - Pause track audio
  - Stop track audio
  - Next track audio
  - Previous track audio
  - Seek To track specified time
- Testings:
  - Cypress testings on Home page
  - Check like button
  - Check playlist creation
  - Check track addition to playlist
- General:
  - Postgres db hosted on Vercel
  - Trying to optimize app with correct client / server components
  - Server actions to retrieve data
  - Minimal responsive design
  - Minor animations (hover and lottie)
  - Display list of artists
  - Display list of Tracks
  - Display Artists details
  - Display playlist list and page


## Testings
To launch test :
- go in a terminal in the project folder
- launch command: `yarn run cypress:open`

## Edges cases
- minors ui flicks on Ellipsis buttons (on tracks)
- minors general ui (spaces, colors, placement)
- Not removing track from playlist if user is on playlist page (can also be a normal behavior depending if we want to let the user undo the action)
- Not perfect responsive
- Too few tests
- No error handling (with `Sentry`)

## More
- using GitMoji for better visibility on commits
- using `yarn` for package management
