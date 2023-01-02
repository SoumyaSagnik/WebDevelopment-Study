const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(logger);

// ! app.get takes location which is here "/" meaning default and a function which has 3 params req, res and next. Next is almost never used.
// ! by passing middleware logger in the app.get, we make sure it runs only on home page i.e., /. If we want the middleware to be run by each and every request, we can do app.use(middleware) at the top after app.set
// ! We can have n number of middleware passed to the same request!
app.get("/", logger, (req, res) => {
  console.log("Here");
  //   res.status(500).send("esdun dnes");
  //   res.status(500).json({ message: "Hello!" });
  //   res.json({ message: "Hello World!" });
  //   res.download("server.js"); // will download entire file

  // We'll be using EJS as our view engine

  res.render("index", { text69: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);

// app.use(express.static("public")) for rendering static html, css and js files inside folder named public (which is the naming convention).
