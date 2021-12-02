const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {
    type: String,
    maxlength: 20
}, 
cost: {
    type: Number,
    min: 100,
   max: 2000
} 
}) 
 
module.exports = mongoose.model("Costume", 
costumeSchema) 