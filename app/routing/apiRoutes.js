
var friends = require("../data/friends.js");

// export module
module.exports = function (app) {
    // Get a JSON list of all possible friends
    app.get("/api/friends", function (req, res) {
        // return JSON data
        return res.json(friends); // RETURN JSON
    });

    // Get the last item from the friends list to show
    app.get("/api/latest", function (req, res) {
        // return JSON data
        return res.json(friends[friends.length - 1]); // RETURN last item from object array
    });

    // Recieves JSON POST survey results
    app.post("/api/friends", function (req, res) {
        const survey = req.body;
        const intScores = survey.scores.map(num => parseInt(num));
        let newFriend = {
            name: survey.name,
            photo: survey.photo,
            scores: intScores
        }
        // add new friend to friends array of objects
        let sortedResults = [];

        let getDiff = () => {
            let score = 0;
            // loop through each friend
            let temp = friends.map(element => {
                console.log(element.scores, element.name);
                console.log(newFriend.scores, newFriend.name);
                let tmpArray = [];
                for (let i = 0; i < element.scores.length; i++) {
                    tmpArray.push(Math.abs(element.scores[i] - newFriend.scores[i]));
                }
                console.log(tmpArray);
                // sum of array from https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
                let obj = {
                    name: element.name,
                    photo: element.photo,
                    score: tmpArray.reduce((partial_sum, a) => partial_sum + a)
                }
                console.log(`Sum of Differences: ${obj.score}`);
                return obj;

            })
            console.log('Sorted:');
            // Sorted by lowest from .sort() method http://www.javascriptkit.com/javatutors/arraysort2.shtml
            sortedResults = temp.sort((a, b) => { return a.score - b.score });
            console.log(sortedResults);
            friends.push(newFriend);
            console.log("new friend: ", friends[friends.length-1]);
        }

        console.log(req.body);
        getDiff();
        // Display the JSON to the client
        res.json(sortedResults[0]); // return first element of sorted array
    });

}
