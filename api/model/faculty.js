const mongoose=require('mongoose');
const Facultyschema=new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:String,
    dept:String
})
module.exports=mongoose.model('Faculty',Facultyschema);