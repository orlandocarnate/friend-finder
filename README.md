# Friend-Finder Full Stack App [LINK](https://oc-friend-finder.herokuapp.com/)

## Overview
A compatibility-based "FriendFinder" application. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
This web app uses Bootstrap, JavaScript, and jQuery for the **front-end** and Node.js, Express.js, and Heroku server for the **back-end**. The web app is deployed to the Heroku server using Git.

## Technology Used
* [Node.js](https://nodejs.org/)
* [MySQL database](https://www.mysql.com/)
* [MySQL package](https://www.npmjs.com/package/mysql) Node module is a driver for MySQL. 
* [Express package](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework.

## How to use the program
[Home Page](https://oc-friend-finder.herokuapp.com/) introduces the web app and also shows the latest addition to the `friends.js` objects array.
[Survey Page](https://oc-friend-finder.herokuapp.com/survey) asks for your name and a link to your profile pic. You then answer 10 personality questions. If you don't fill in the form properly, such as an invalid image, you will get an alert modal describing what needs to be addressed.
When the correct information and questions have been completed and successfully submitted, the app will determine the match the most compatible friend from the `friends` array in a modal. When the modal is closed the home page is loaded showing you as the newest addition to the friends array.

## Folder Structure
```
├───app
│   ├───data
│   ├───public
│   │   └───assets
│   └───routing
└───node_modules
```
- `server.js` - main node.js app that runs the server
- `/app/data/friends.js` - contains friends array with a few examples.
- `/app/public/home.html` - main page that takes you to the survy. Also shows the latest friend added.
- `/app/public/survey.html` - survey that asks for your name, link to profile pic, and 10 questions. Once completed an algorithm determines your friend compatibility by matching your answers to others.
- `/app/public/assets/` - contains styles.css and background images.
- `/app/routing/apiRouting/apiRoutes.js` - takes care of the GET and POST routes.
    * A GET route with URL `/api/friends` - gets JSON data of all friends in the friends array.
    * A POST route with URL `/api/friends` - handles the Form data, runs the compatibility algorithm, and returns a JSON object of the closest match.
 `/app/routing/apiRouting/htmlRoutes.js` - takes care of the HTML pages.
    * A GET route with URL `/` - sends the `home.html` page.
    * A GET route with URL `/survey` - sends the `survey.html` page.

## Heroku CLI setup & Deployment
To deploy to Heroku you should modify the PORT variable otherwise it will not run on a public server.
`var PORT = process.env.PORT || 8080;`
1. `heroku login`
2. `heroku create`
3. `heroku info oc-friend-finder` -get info on heroku app
4. `heroku git:remote oc-friend-finder` -setup remote for heroku
5. `git status`
6. `git remote -v` -shows fetch and push locations of both git and heroku
7. `git push heroku master` -if you use origin instead of heroku it will push to GitHub instead.
8. `heroku logs --tail` -for log errors

## How to import apiRoutes.js and htmlRoutes.js to server.js
* From [Stackoverflow](https://stackoverflow.com/questions/10090414/express-how-to-pass-app-instance-to-routes-from-a-different-file): to import the apiRoutes.js and the htmlRoutes.js to server.js you use `module.exports = function (app) {..}` in both js files and `require("./app/routing/apiRoutes")(app);` and `require("./app/routing/htmlRoutes")(app);` in the server.js file.

## Getting the sum of an array of integers
From [W3Resource.com](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-23.php) I learned that you can use the `.reduce()` method on an array of integers.
`score: tmpArray.reduce((partial_sum, a) => partial_sum + a)`

## Sorting an array of objects
From [JavaScriptKit.com](http://www.javascriptkit.com/javatutors/arraysort2.shtml) I learned how to sort the friends array by score in ascending order.
`sortedResults = temp.sort((a, b) => { return a.score - b.score });`

## Form Validation
* Text Input
    * For the name field I check if it is blank or not. 
    * For the Photo link I used a regular expression and the `.match()` method
```
function checkTextInput() {
const regex = /^(.*)(\.png|\.jpg|\.jpeg|\.gif)$/g;
if (($("#inputName").val().trim()).length > 0 && ($("#inputPic").val().trim()).length > 0 && ($("#inputPic").val().trim()).match(regex)) {
    console.log("both text have value - true");
    return true;
} else {
    console.log("both text have value - false");
    return false;
}
```

* Radio Buttons
    * I used a for loop to check if each radio group is checked or not. If checked I push true to a `flagArray`, if not push false into the `flagArray`.
    * I then check the `flagArray` to see if false is in the array using `.includes()` array method

* If any of the form inputs have errors an Alert modal will pop-up showing what needs to be fixed.

## Survey questions
[OpenPschoMetrics.org Personality Quiz](https://openpsychometrics.org/printable/big-five-personality-test.pdf) - I used some of the questions from this personality quiz for the survey.

## Other Resources
* Pexels Free Photos [Pictures of People](https://www.pexels.com/photo/time-lapse-photography-of-people-walking-on-pedestrian-lane-842339/)
* [Image compressor](https://imagecompressor.com/) for shring image file sizes.
