const nedb = require("nedb");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));
const db = new nedb({ filename: "emp.db", autoload: true });
console.log("db created");
app.get("/", function (req, res) {
 res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(3000,() =>{
 console.log("Server listening on port: 3000");
});

    //add
    app.post("/add", function (req, res) {
          db.insert({ name: req.body.name }, function (err, newDoc) {
            if (err) {
              console.log("error", err);
            } else {
              console.log("document inserted", newDoc);
            }
          });
        });