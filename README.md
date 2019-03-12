# friend-finder
A compatibility-based "FriendFinder" application. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Technology Used
* [Node.js](https://nodejs.org/)
* [MySQL database](https://www.mysql.com/)
* [MySQL pacakage](https://www.npmjs.com/package/mysql) Node module is a driver for MySQL. 
* [Express package](https://www.npmjs.com/package/express) Fast, unopinionated, minimalist web framework.

## How to import apiRoutes.js and htmlRoutes.js to server.js
* [Stackoverflow](https://stackoverflow.com/questions/10090414/express-how-to-pass-app-instance-to-routes-from-a-different-file)

## Get difference between two arrays
[link](https://www.w3resource.com/javascript-exercises/javascript-array-exercise-23.php)

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


## Survey questions
[OpenPschoMetrics.org Personality Quiz](https://openpsychometrics.org/printable/big-five-personality-test.pdf)
[Time.com Star Wars Character page]http://time.com/5063406/star-wars-character-quiz/
Another is from Brainfall- [How Jedi/Sith Are You?](https://brainfall.com/quizzes/how-jedi-sith-are-you/)

## Pexels Free Photos
[Pictures of People](https://www.pexels.com/photo/time-lapse-photography-of-people-walking-on-pedestrian-lane-842339/)

## [Image compressor](https://imagecompressor.com/)

## Heroku CLI setup
1. `heroku login`
2. `heroku create`
3. `heroku info oc-friend-finder` -get info on heroku app
4. `heroku git:remote oc-friend-finder` -setup remote for heroku
5. `git status`
6. `git remote -v` -shows fetch and push locations of both git and heroku
7. `git push heroku master` -if you use origin instead of heroku it will push to GitHub instead.
8. `heroku logs --tail` -for log errors