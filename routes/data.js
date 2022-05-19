const express =  require("express");
const router = express.Router();

const api = require("../utils/api");

router.get("/:id", (req, res) => {
    try { 
        res.json(api[req.params.id - 1]);
    } catch(e){
        res.status(500).send(e, "invalid request")
    }
});

router.post("/", (req, res) => {
    try { 
        res.json(api.push(req.body.data));
    } catch(e){
        res.status(500).send(e, "invalid request")
    }
});

module.exports = router;