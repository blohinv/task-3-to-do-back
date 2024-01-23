const express = require("express");
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require("./src/routes/task");
const { PORT, DB_CONNECTION } = require('./config');

app.use(express.json());
app.use('/', apiRoutes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }); 
    
    app.listen(PORT, () => {
      console.log(`Example app listenning on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

loadApp();