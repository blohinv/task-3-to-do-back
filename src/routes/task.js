const express = require("express");
const router = express.Router();
const { 
  getAllTasks, 
  createOneTask,
  editOneTask,
  changeCheckboxCheck,
  removeOneTask,
  removeAllTasks
} = require('../controllers/task-controllers');
const { validationText } = require('../middlewares/task-validation'); 

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.patch('/tasks/:id', editOneTask);
router.patch('/tasks/:id/is-check', changeCheckboxCheck);
router.delete('/tasks/:id', removeOneTask);
router.delete('/tasks', removeAllTasks);


module.exports = router;