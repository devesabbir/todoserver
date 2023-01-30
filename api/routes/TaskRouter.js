const express = require("express");
const {
  handleGetAllSector,
  handleAddSector,
  handleGetAllTask,
  handleCreateTask,
  handleGetSingleTask,
  handleEditTask,
} = require("../controller/TaskController");

const Router = express.Router();

Router.get("/getsectors", handleGetAllSector);
Router.get("/gettasks", handleGetAllTask);
Router.get("/gettask/:id", handleGetSingleTask);
Router.post("/addsector", handleAddSector); 
Router.post("/createtask", handleCreateTask); 
Router.post("/edittask/:id", handleEditTask); 

module.exports = Router;  
  