const express = require("express");
const app = express();
const todoController = require("./controllers/todoController")
//Telling Node to use EJS

app.set("view engine","ejs");
app.use(express.static("public"))
//Fire The Controller
todoController(app)


app.listen(process.env.PORT || 8080,()=>{
    console.log("App Started")
})