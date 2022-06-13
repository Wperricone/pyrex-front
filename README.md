# Pyrex Party!

### Solo Project

## Overview

Vintage Pyrex is a true treasure. There are so many patterns it is difficult to keep track of them! With Pyrex Party a user can see what the patterns look like and if the user likes it they can add it to their favorites list. A user starts off being able to see all the bright, beautiful patterns. If a user clicks on the 'Click Here to See More!' button, the user will be able to see the pattern and get some new options. If the pattern is not already in the user's favorites list, the button will say 'Add to Favorites'. If the pattern is already in the favorites list, the button will say 'Delete from Favorites'. From this page the user can also go to the favorites list, or back to the home page to see all of the patterns. From the home page the user can navigate to the Favorites page.

### [Pyrex Front-end Deploy Link](https://github.com/Wperricone/pyrex-front.git)

### [Pyrex-api Deploy Link](https://github.com/Wperricone/pyrex-back.git)

## Project Views

### Home view of all patterns and clicking on one to see more options:
![Pyrex home](https://user-images.githubusercontent.com/96502923/173266202-9e10d274-bea6-456f-9f3a-6eafd1c7e87a.gif)


### From an individual pattern view, add the pattern to favorites and navigate to favorites:
![Pyrex Add Fav](https://user-images.githubusercontent.com/96502923/173266539-7148fda3-4bc5-4c26-b8c3-a206977e2126.gif)

### From an individual pattern view, delete the pattern from favorites and navigate back home:
![Pyrex del](https://user-images.githubusercontent.com/96502923/173266698-4e90f093-f70e-4ee3-a3ab-6acbb40dc1e9.gif)

### From home, navigate to favorites, and delete one favorite, and go back home:
![Pyrex nav:del](https://user-images.githubusercontent.com/96502923/173266806-119be5f9-db55-4280-8a9e-7b67416d21a5.gif)



## React

- This multi page App with React was an exercise for me to learn and grow my knowledge of interacting with endpoints that were created from my API.


## Cypress Testing

- All Testing of User views and user interactions
- Error Handling of Server errors and invalid URLS Tested
- Fetch requests are stubbed


## Local Set-Up Instructions
### First, open the API by following these instructions:

- From the repo click the code button and copy the SSH link.
- Open terminal by pressing command + space bar, and search for terminal
- Inside of your terminal type `git clone` and then paste the ssh link. It should look like this: `$git clone https://github.com/Wperricone/pyrex-back.git`
- In your terminal type `$cd pyrex-bak`
- Type `$npm install`
- Do not run `$npm audit fix --force`
- Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
### Once the API is running, follow these steps to start the front-end:

- From the repo click the code button and copy the SSH link.
- Open terminal by pressing command + space bar, and search for terminal
- Inside of your terminal type `git clone` and then paste the ssh link. It should look like this: `git clone https://github.com/Wperricone/pyrex-front.git`
- In your terminal type `cd pyrex-front`
- Type `npm install`
- Do not run `npm audit fix --force`
- Then type `npm start` This runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The browser should then deploy using a local host
- Enjoy using Pyrex Party!

- NOTE: Make sure that you type `Control + C` in your terminal when you are done using the application. This ensure the server will stop running before your close your Terminal.

## Instructions for Use

- On opening the browser, a user is free to scroll all of the Pyrex patterns
- Each pattern can be clicked on and from there added to the favorites list, or if it is already there, deleted from the list
- A user can navigate between the home page and the favorites with the links in the navigation bar
- Once in the favorites, a user can choose to delete any pattern they'd like

## Technologies Used

- React
- React Router
- Cypress Testing
- GET requests
- POST requests
- DELETE requests
- ES6 JavaScript
- CSS
- HTML
- Fetch Web API

## Future Features

- Add the ability to save a pattern to 'My Collection' in order to catalogue a user's collection.
- Add a filter feature to filter my tags and colors.

## Project Management

- I used a [Github Project Board](https://github.com/Wperricone/pyrex-front/projects/1) stay on task and meet the deadlines.

### Figma Component Architecture

[Figma Plans](https://www.figma.com/file/WcoKh0P7InqavQVEALLxCA/Pyrex-Plan)


## Contributors

- [Whitney Perricone](https://github.com/Wperricone)
