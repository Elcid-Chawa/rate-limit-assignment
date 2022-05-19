const express = require("express");
const router  = express.Router();

const api = require("../utils/api");

router.get("/", (req, res) => {
    res.json(api);
})

module.exports = router;