const mongoose = require("mongoose");
const { type } = require("os");
// const { type } = require("os");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  instituteType: {
    type: String,
    enum: [" Playhouse", "School", "College", "Competitive Exam Center"],
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
