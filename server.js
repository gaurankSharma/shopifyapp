const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

let app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engie", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("year2019", () => {
  return new Date().getFullYear();
});
app.use((req, res, next) => {
  let date = new Date().toString();
  let log = `${date}${req.method}${req.url}`;
  console.log(log);
  fs.appendFile("mylog.log", log + "\n", err => {
    if (err) {
      console.log("unable to log the user");
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render("mysite.hbs");
// });

app.get("/", (req, res) => {
  res.send({
    name: "gaurank",
    like: ["road", "mounten", "some"]
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "this is page title"
  });
});
app.get("/bed", (req, res) => {
  res.render("home.hbs", {
    name: "gaurnak"
  });
});

app.listen(3000, () => {
  console.log("server is up 3000");
});
