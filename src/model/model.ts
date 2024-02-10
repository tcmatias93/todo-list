import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  task: String,
  status: String,
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
