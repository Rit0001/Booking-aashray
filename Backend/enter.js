const mongoose=require("mongoose");
const enterSchema=mongoose.Schema({
    city:String,
    checkin:Date,
    checkout:Date,
    rooms:Number
})
module.exports=mongoose.model("enter",enterSchema)