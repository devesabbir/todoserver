const AsyncHandler = require("express-async-handler");
const Sector = require("../model/Sectors");
const Task = require("../model/Task");


/**
 * This Controller wuill help to tget all sector options
 */
const handleGetAllSector = AsyncHandler(async (req, res, next) => {
  let allSectors = await Sector.find();


  // Send data to client
  res.status(200).json({
    message: "Sector Get Success",
    data: allSectors,
  });
});

/**
 * This Controller will help to add a sector options
 */
const handleAddSector = AsyncHandler(async (req, res, next) => {
  let {
    title
  } = req.body;

  const addedSector = new Sector({
    title,
  });
  await addedSector.save();

  //   Sending response to client
  res.status(201);
  res.json({
    message: "Sector create success",
  });
});


/**
 * This Controller will help to get all Tasks
 */
const handleGetAllTask = AsyncHandler(async (req, res, next) => {
  let allTask = await Task.find();

  // Send data to client
  res.status(200).json({
    message: "Task Get Success",
    data: allTask,
  });
})


/**
 * This Controller will help to get Single Tasks
 */

 const handleGetSingleTask = AsyncHandler(async (req, res, next) => {
  let { id } = req.params
  let task = await Task.findById(id);

  // Send data to client
  res.status(200).json({
    message: "Task Get Success",
    data: task,
  });
})



/**
 * This Controller will help to get Single Tasks
 */

 const handleEditTask = AsyncHandler(async (req, res, next) => {
  
  let {id} = req.params
  let task = await Task.findByIdAndUpdate({_id:id}, {...req.body});

  // Send data to client
  res.status(200).json({
    message: "Task Update Success",
    data: task,
  });
})



/**
 * This Controller will help to create a Task
 */
 const handleCreateTask = AsyncHandler(async (req, res, next) => {
  let {
    name,
    sector
  } = req.body;

  const addedTask = new Task({
    name,
    sector
  });
  await addedTask.save();

  //   Sending response to client
  res.status(201);
  res.json({
    message: "Task create success",
    data:addedTask
  });
})



module.exports = {
  handleGetAllSector,
  handleAddSector,
  handleGetAllTask,
  handleCreateTask,
  handleGetSingleTask,
  handleEditTask
};