const express = require("express");
const Energy = require("../models/Energy");
const router = express.Router();

router.post("/", async (req, res) => {
    const newEntry = new Energy(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
});

router.get("/", async (req, res) => {
    const data = await Energy.find();
    res.json(data);
});

module.exports = router;
