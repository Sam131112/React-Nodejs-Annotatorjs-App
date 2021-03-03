const mongoose = require("mongoose")

const annotationmodel = new mongoose.Schema({
     category:{
         type:String,
         required:true
     },
     quote:{
         type:String,
         required:true
     },
     tags:{
         type:Array,
         required:true
     },
     text:{
         type:String,
         required:true
     },
     date:{
         type:Date,
         default:Date.now
     }
})

module.exports = mongoose.model('annotable',annotationmodel)