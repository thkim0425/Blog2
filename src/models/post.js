const mongoose = require("mongoose");
const { Schema } = mongoose;

const Post = new Schema({
  author: { type: String },
  title: { type: String },
  letter: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", Post);
