let mongoose = require("mongoose");
mongoose.set("strictQuery", true); 

const dotenv = require("dotenv");
dotenv.config()


async function mongoConnection() {
  try {
    let mongoString = process.env.MONGO_STRING;
    let conn = await mongoose.connect(mongoString, {
      dbName:'simpletodo',
      user:'devesabbir',
      pass:'RAg3CHuwPr.kEUK', 
      useNewUrlParser: true,
    });  
   
    console.log(
      `Database Connect Successfully to host : ${conn.connection.host}`
        .bgMagenta.black
    );
  } catch (err) {
    console.log(`${err.message}`.bgRed.white);
    // process.exit(1);
  }
}

module.exports = mongoConnection;
