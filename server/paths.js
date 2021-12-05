var express= require('express')
var signup_schema = require('./schema.js')
const router=express.Router()
router.post('/test',(req,res)=>{
    signup_schema.create({
        username:req.body.username,
        password:req.body.password,
        dob:req.body.dob
    })
    console.log("inserted");
})
module.exports=router