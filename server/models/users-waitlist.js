const mongoose=require("mongoose");

const waitListSchema=new mongoose.Schema({
    email:String,
})

const waitListModel=new mongoose.model("waitListModel",waitListSchema);

module.exports=waitListModel;