const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const handleBars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./models");

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", handleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./routes/api-routes.js");
app.use("/", routes);

db.sequelize.sync().then(function(){
    app.listen(PORT, () => {
      console.log("Listening on PORT " + PORT);
    });
});
