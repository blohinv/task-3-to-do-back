const Task = require('../models/task');

const getTasks = async () => {
  const tasks = await Task.find();
  return tasks;
}

const createTask = async (text) => {
  const newTask = new Task({ text });
  const savedTask = await newTask.save();

  return savedTask;
}

const editTask = async (_id, text) => {
  const taskToEdit = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { text } },
    { new: true }
  );

  return taskToEdit;
}

const changeCheckbox = async (_id, isCheck) => {
  const taskToEdit = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { isCheck } },
    { new: true }
  );

  return taskToEdit;
}

const deleteTask = async (_id) => {
  const taskToDelete = await Task.findOneAndDelete({ _id });

  return taskToDelete;
}

const deleteAllTasks = async () => {
  const allTasksToDelete = await Task.deleteMany();

  return allTasksToDelete;
}

module.exports = { 
  getTasks,
  createTask,
  editTask,
  changeCheckbox,
  deleteTask,
  deleteAllTasks
}