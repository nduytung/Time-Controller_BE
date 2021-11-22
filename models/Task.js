const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  taskname: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    required: true,
  },
  importantRate: {
    type: Number,
    required: true,
  },

  //BE tu tinh toan
  pomodoroPeriod: {
    type: Number,
    default: 0,
  },
  done: {
    type: Number, //so task da xong
    default: 0,
  },
  schedule: [
    {
      type: Date,
    },
  ],
});

module.exports = mongoose.model("task", TaskSchema);
