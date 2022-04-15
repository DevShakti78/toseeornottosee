const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  titel: { type: String, required: true },
  body: { type: String, required: true },

},{
    versionKey:false,
    timestamps:true,
});

module.exports = mongoose.model("post" , postSchema)