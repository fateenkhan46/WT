var mongoose = require('mongoose');
var data_schema=new mongoose.Schema({
    username:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    dob:{type:String, required:true}
})
module.exports= mongoose.model("customers",data_schema)