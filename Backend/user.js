const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    phone:Number,
    account:Number,
    adhaar:Number,
    message:String
})
module.exports=mongoose.model('user1',userSchema)