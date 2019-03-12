// Dependencies
// =============================================================
var express = require("express");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Express routes
// =============================================================
// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// CSS and Image paths
app.use(express.static(path.join(__dirname, "app/public/assets")));

// import routes from routes folder
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});