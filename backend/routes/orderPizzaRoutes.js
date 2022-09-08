const express = require('express')
const router = express.Router();
const {addPizzaToCart,getPizza,deleteCartPizza} =require ("../controllers/orderPizzaController");
const auth = require("../middlewares/auth");



router.post("/addPizzaToCart", addPizzaToCart);

router.get("/getPizza", getPizza);

router.delete("/deleteCartPizza/:pizzaName", deleteCartPizza);



module.exports = router;