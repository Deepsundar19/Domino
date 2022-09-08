const express = require('express')
const router = express.Router();
const {addPizza,fetchPizza,getCurrentPizza,editPizza,deletePizza} =require ("../controllers/pizzaManiaController");
const auth = require("../middlewares/auth")


router.post("/addPizza", addPizza);

router.get("/fetchPizza", fetchPizza);

router.get("/getCurrentPizza/:pizzaName", getCurrentPizza);

router.put("/editPizza/:pizzaName", editPizza);

router.delete("/deletePizza/:pizzaName", deletePizza);

module.exports = router;