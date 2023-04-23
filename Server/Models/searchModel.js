const mongoose=require("mongoose");

const searchSchema= new mongoose.Schema({
   
    companyId: Number,
    companies:String,
    primaryText: String,
    headline: String,
    description: String,
    CTA: String,
    imageUrl: String,
})

module.exports = mongoose.model('SearchBar', searchSchema);
