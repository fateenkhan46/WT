var express= require('express')
var cors=require('cors')
var mongoose=require('mongoose')
var paths=require('./paths.js')
const server_app= express()
mongoose.connect('mongodb://localhost:27017',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => console.log("Database connection successful!"))
    .catch( e => console.log(e))
server_app.use(express.json())
server_app.use(cors())
server_app.use("/db",paths)
server_app.listen(8080,()=>(
    console.log("berj ckew")
))
