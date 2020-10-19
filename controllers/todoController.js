

const todoController = function(app){

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const parser = bodyParser.urlencoded({extended:false})
const mongoose = require("mongoose");

const mongoDBURL = "mongodb+srv://admin:12345@tododb.ppifb.mongodb.net/todoarr?retryWrites=true&w=majority";

mongoose.connect(mongoDBURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("Database Connected")).catch(err=>console.log(err))

const todoListSchema = new mongoose.Schema({item:String});
const todoModel = mongoose.model("todolist",todoListSchema)


app.get("/",(req,res)=>{
  res.render("home")
})


app.get("/todo",(req,res)=>{

todoModel.find({},(err,data)=>{
  if(err) throw err

res.render("todo",{todos:data})
})


  
})

//Post
app.post("/todo",parser,(req,res)=>{

new todoModel(req.body).save((err,data) =>{
  if(err)console.log("Something Went Wrong!!")
  else res.json(data)
}) 


  
})


//Delete
//Post
app.delete("/todo/:name",(req,res)=>{

const itemToDelete = req.params.name.split("-").join(" ").trim()
todoModel.find({item:itemToDelete}).deleteOne((err,data)=>{
  if(err) throw err
  res.json(data)
})

  
})







}



module.exports = todoController