const express = require("express");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Helpdesk Ticket Management System API is running");
});

app.use("/api/tickets", ticketRoutes);

module.exports = app;