const mongoose = require("mongoose");

const EnergySchema = new mongoose.Schema({
    appliance: String,
    energyUsage: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Energy", EnergySchema);
