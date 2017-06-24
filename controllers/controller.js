
var express = require("express"),
    router = express.Router();
    // route to render the welcome page
    router.get("/", (req, res) => {
      res.render("index");
    });

// export router here
module.exports = router;
