const { 
  getTasks,
  createTask,
  editTask,
  changeCheckbox,
  deleteTask,
  deleteAllTasks
} = require("../services/task-services");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(400).send("Failed to get tasks");
  }
}

const createOneTask = async (req, res) => {
  try {
    const { text } = req.body;
    const task = await createTask(text);

    res.status(200).send(task);
  } catch (error) {
    res.status(400).send("Failed to create task");
  }
}

const editOneTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { text } = req.body;

    const taskToEdit = await editTask(id, text);

    res.status(200).send(taskToEdit);
  } catch (error) {
    res.status(400).send("Failed to edit task");
  }
}

const changeCheckboxCheck = async (req, res) => {
  try {
    const id = req.params.id;
    const isCheck = req.body.isCheck;

    const taskToEdit = await changeCheckbox(id, isCheck);

    res.status(200).send(taskToEdit);
  } catch (error) {
    res.status(400).send("Failed to change checkbox");
  }
}

const removeOneTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskToDelete = await deleteTask(id);

    res.status(200).send(taskToDelete);
  } catch (error) {
    res.status(400).send("Failed to delete task");
  }
}

const removeAllTasks = async (req, res) => {
  try {
    const tasksToDelete = await deleteAllTasks();

    res.status(200).send(tasksToDelete);
  } catch (error) {
    res.status(400).send("Failed to delete all tasks");
  }
}

module.exports = {
  getAllTasks,
  createOneTask,
  editOneTask,
  changeCheckboxCheck,
  removeOneTask,
  removeAllTasks
}