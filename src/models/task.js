const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  text: {
    type: String,
    required: true
  },

  isCheck: {
    type: Boolean,
    default: false
  }
});

module.exports = Task = mongoose.model("Tasks", taskSchema);