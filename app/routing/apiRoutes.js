
var friends = require("../data/friends.js");

// export module
module.exports = function(app) {
    // Get a JSON list of all possible friends
    app.get("/api/friends", function (req, res) {
        // return JSON data
        return res.json(friends); // RETURN JSON
    });
    
    // Recieves JSON POST survey results
    app.post("/api/friends", function (req, res) {

        console.log(req.body);
        // Display the JSON to the client
        res.json(req.body);
    });

}
