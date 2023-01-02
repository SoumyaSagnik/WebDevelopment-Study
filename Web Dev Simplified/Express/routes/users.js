const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

// /:id means get path with users/anyId
// Dynamic routes should always be put at the bottom as for eg. /new is also an id

// router.get("/:id", (req, res) => {
//   res.send(`User Get ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//     res.send(`User Update ${req.params.id}`);
//   });

// router.delete("/:id", (req, res) => {
//     res.send(`User Delete ${req.params.id}`);
// });

// Instead of writing 3 times same location use this:

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`User Get ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`User Update ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`User Delete ${req.params.id}`);
  });

// this function is going to run anytime it finds a param that matches the name you pass in.
// whatever written after this will not be executed unless we call the function next. The browser keeps on loading indefinitely!
// param is a type of middleware. Middleware is something that runs in between the request being sent to the server and the actual response being returned to the user.
// Middleware should be put at the top before any requests/ response as we are not calling next() inside them.

const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
