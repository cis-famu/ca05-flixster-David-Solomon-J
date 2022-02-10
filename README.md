# CA05 - Flixster Part 1
 
**Overview**:  This project lets users view a list of movies sourced from the The Movie Database API.

**Submission Instructions**:
Once you've completed the required user stories for your project, take the following steps to get your project ready to submit.

1. Push Code to Github Repository
	- If this week's assignment is starting a new project, you will have to create a new Github repo. However, if the week's assignment is a continuation of the last week's project, you will NOT create a new project. Copy the project files into the new repository folder and make an initial commit.

2. Create a README Template
	- Every submission must be accompanied by a README.md using the readme template provided with the assignment to demonstrate which required and optional tasks you've completed.
	- In your project repository, add a README.md file in the root directory that contains the contents of the README template for that assignment.
	- If the assignment is a continuation of the same project from a previous week, add the new template to the end of the previous README instead of creating a new file.
	- Make sure to check off the user stories you've completed.

3. GIF Walkthrough
	- Your README.md must contain a GIF walkthrough using a recording program of your choice. It should demonstrating how it works with the user stories completed.
	- We recommend [Kap](https://getkap.co/) for macOS, [ScreenToGif](https://www.screentogif.com/) for Windows, and [peek](https://github.com/phw/peek) for Linux.
	- [Imgur](https://imgur.com/upload) is a great service for hosting the GIF walkthrough and then linking to it from the README.
	- When using Imgur, you can right-click on the gif and choose "Copy Image Address" to get the correct address. Make sure the address has a `.gif` extension. If you end up with a url that has a `.gifv` extension, removing the `v` and changing this to `.gif` will ensure the gif renders on GitHub.

4. Make sure you've pushed all your latest code up to GitHub
	- To check this, you can browse your repository on GitHub on your favorite browser to make sure some of your latest changes are present there.


### Check out the Movie DB API

- [Check out this video](https://youtu.be/Hfoi4N1ES-4?t=243)

1. Poke around in the [The Movie Database documentation](https://developers.themoviedb.org/3/getting-started) to familiarize yourself with the API's general structure and features.

    - ["Now Playing" endpoint.](https://developers.themoviedb.org/3/movies/get-now-playing)
    - Sample Request:
        - https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed in your browser.
        - API Key `a07e22bc18f5cb106bfe4cc1f83ad8ed`
    - Note: It's helpful to install the JSONView Chrome Extension to view the returned JSON more easily.

#### MockUp
You may choose any design libary of your liking. Here are some suggestions:
 - [Bootstrap](https://getbootstrap.com/) `npm i bootstrap --save`
 - [Material UI](https://material-ui.com) `npm i @material-ui/core --save`
 - [Materialize](https://materializecss.com/) `npm install materialize-css@next --save`

The mockup below uses the 3rd on the list. But you are free to use Bootstrap. The layouts will not be identical and that is okay.

<img src="https://i.imgur.com/aPtuEhy.gif" alt="Mockup gif" /> (https://i.imgur.com/aPtuEhy.gif)

## User Stories
A user story is a way to capture requirements for an application from an end-user perspective. It is a common practice in app development and helps to simplify the way requirements are specified.

### Required Stories
- User can view a list of movies (title, poster image, and overview) currently playing in theaters from the Movie Database API. ***(10 points)***
	- You may use [this library](https://github.com/cavestri/themoviedb-javascript-library/) to make API calls easier. Download the js file and place it in you project. *You will need to remove everywhere it says* `'use strict';`

### Stretch Stories
- Ensure a responsive layout. The app should reduce the number of elements displayed in a row based on the screen size. ***(2 points)***
- Improve the user interface through styling and coloring ***(1 to 5 points depending on the difficulty of UI improvements)***
