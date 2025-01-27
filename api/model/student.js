const mongoose=require('mongoose');
const Studentschema=new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    address:String
})
module.exports=mongoose.model('Student',Studentschema);