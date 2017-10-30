const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("Email Service");
});

router.get("/email", (req, res) => {
    res.status(200).json({
        description: "Email Route"
    });
});

module.exports = router;