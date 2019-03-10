var path = require("path");

// export module
module.exports = function(app) {
    // HOME
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log(__dirname);
    });
    
    // SURVEY
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log(__dirname);
    });

}
