const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
 
// adding static path
const static_path = path.join(__dirname, "../public" );
const temp_Path = path.join(__dirname, "../tempweather/views");
const partials_path = path.join(__dirname, "../tempweather/partials");

app.set("views", temp_Path);
app.set("view engine", "hbs");
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routing
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});
app.get("*", (req, res)=>{
    res.render("404error");
});
app.listen(port, ()=>{
    console.log(`listening to port no ${port}`);
});