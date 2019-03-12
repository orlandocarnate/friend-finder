var path = require("path");
var express = require("express");

// export module
module.exports = function (app) {
    // CSS and Image paths
    app.use(express.static(path.join(__dirname, "../public/assets")));

    // SURVEY
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // HOME
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    
    // Catch All routes to home page
    app.get("*", function (req, res) {
        res.redirect("/");
    });

}
