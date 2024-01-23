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
  const editedTask = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { text } },
    { new: true }
  );

  return editedTask;
}

const changeCheckbox = async (_id, isCheck) => {
  const editedTask = await Task.findOneAndUpdate(
    { _id }, 
    { $set: { isCheck } },
    { new: true }
  );

  return editedTask;
}

const removeTask = async (_id) => {
  const removedTask = await Task.findOneAndDelete({ _id });

  return removedTask;
}

const removeManyTasks = async () => {
  const removedTasksList = await Task.deleteMany();

  return removedTasksList;
}

module.exports = { 
  getTasks,
  createTask,
  editTask,
  changeCheckbox,
  removeTask,
  removeManyTasks
}