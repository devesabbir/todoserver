const mongoose = require("mongoose");

const SectorSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
});

const Sector = mongoose.model("Sector", SectorSchema);

module.exports = Sector
  