// Dependencies
var express = require("express"),
    bodyParser = require("body-parser"),
    exphbs = require("express-handlebars"),
    // Sets up the Express App
    app = express(),
    PORT = process.env.PORT || 3000;

// serve public files as static
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// router
var routes  = require("./controllers/controller");
app.use('/', routes);

// set up handlebars engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// starting express app
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
