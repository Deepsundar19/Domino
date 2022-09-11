const express = require('express');
const cartPizza = require('../models/cartPizza');

const addPizzaToCart = async (req,res) =>{
    try {
      const {pizzaName,pizzaType,pizzaPrice,pizzaImage,pizzaQuantity}=req.body;
        const mydata = new cartPizza({
          pizzaName: pizzaName,
          pizzaType: pizzaType,
          pizzaPrice: pizzaPrice,
          pizzaImage: pizzaImage,
          pizzaQuantity:pizzaQuantity
        })
        await mydata.save();
        res.status(201).json("Pizza Added");
    
      } catch (error) {
        res.status(400).json(error);
      }
};


const getPizza = (req,res) =>{
    cartPizza.find().then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        res.status(400).json(err);
      })
};


const deleteCartPizza = async (req,res) =>{
    try{
        const myPizaas=await cartPizza.findOneAndDelete({pizzaName:req.params.pizzaName});
        if(!myPizaas){
          return res.status(404).json('not found')
        }else{
          res.status(200).json(myPizaas);
        }
      }catch(error){
        res.status(400).json('error');
      }
};

module.exports ={addPizzaToCart,getPizza,deleteCartPizza};
