const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router.js");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set("PORT", process.env.NODE_ENV || 9999);

app.use(router);

app.listen(app.get("PORT"), (err) => {
    if(err){
        return console.log(err);
    }
    console.log(`Listening on ${app.get("PORT")}`);
});

module.exports = app;