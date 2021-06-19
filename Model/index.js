const mongoose                  =require("mongoose");
const Schema                    =mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const student=new Schema({
    _id:{type:Number},
    name:{type:String},
    keySv:{type:String},
    class:{type:String},
    country:{type:String},
    phone:{type:String}
},{
    _id:false,
    timestamps:true,
    versionKey:false
  })
student.plugin(AutoIncrement);
module.exports=mongoose.model("student", student);