const { 
  getTasks,
  createTask,
  editTask,
  changeCheckbox,
  removeTask,
  removeManyTasks
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

const editOneTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const { text } = req.body;

    const editedTask = await editTask(id, text);

    res.status(200).send(editedTask);
  } catch (error) {
    res.status(400).send("Failed to edit task");
  }
}

const changeCheckboxCheckById = async (req, res) => {
  try {
    const id = req.params.id;
    const isCheck = req.body.isCheck;

    const editedTask = await changeCheckbox(id, isCheck);

    res.status(200).send(editedTask);
  } catch (error) {
    res.status(400).send("Failed to change checkbox");
  }
}

const removeOneTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const removedTask = await removeTask(id);

    res.status(200).send(removedTask);
  } catch (error) {
    res.status(400).send("Failed to delete task");
  }
}

const removeAllTasks = async (req, res) => {
  try {
    const removedTasksList = await removeManyTasks();

    res.status(200).send(removedTasksList);
  } catch (error) {
    res.status(400).send("Failed to delete all tasks");
  }
}

module.exports = {
  getAllTasks,
  createOneTask,
  editOneTaskById,
  changeCheckboxCheckById,
  removeOneTaskById,
  removeAllTasks
}