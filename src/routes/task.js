const express = require("express");
const router = express.Router();
const { 
  getAllTasks, 
  createOneTask,
  editOneTaskById,
  changeCheckboxCheckById,
  removeOneTaskById,
  removeAllTasks
} = require('../controllers/task-controllers');
const { validationText } = require('../middlewares/task-validation'); 

router.get('/tasks', getAllTasks);
router.post('/tasks', validationText, createOneTask);
router.patch('/tasks/:id', validationText, editOneTaskById);
router.patch('/tasks/:id/is-check', changeCheckboxCheckById);
router.delete('/tasks/:id', removeOneTaskById);
router.delete('/tasks', removeAllTasks);


module.exports = router;