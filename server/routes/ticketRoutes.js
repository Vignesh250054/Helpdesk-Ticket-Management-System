const express = require("express");

const router = express.Router();

// GET all tickets
router.get("/", (req, res) => {
    res.json({
        message: "Get all tickets",
        tickets: []
    });
});

// POST create a ticket
router.post("/", (req, res) => {
    const { title, description, priority } = req.body;

    res.status(201).json({
        message: "Ticket created successfully",
        ticket: {
            title,
            description,
            priority
        }
    });
});

module.exports = router;