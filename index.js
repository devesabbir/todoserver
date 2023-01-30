const express = require("express");
const dotenv = require("dotenv");
require("colors");
const cors = require("cors");

const TaskRouter = require("./api/routes/TaskRouter");
const mongoConnection = require("./api/config/db");

// Application Init
const app = express();
dotenv.config();

// All Middleware
app.use(express.json());
app.use(cors());

// All Routes
app.use("/task", TaskRouter);

// Port
const PORT = process.env.PORT || 7000;
mongoConnection();
// listening to app
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`);
});
