const express = require('express');
const pizza = require('../models/pizza');

const addPizza = async (req, res) => {
  try {
    const {pizzaName,pizzaType,pizzaPrice,pizzaImage}=req.body;
    const mydata = new pizza({
      pizzaName: pizzaName,
      pizzaType: pizzaType,
      pizzaPrice: pizzaPrice,
      pizzaImage: pizzaImage
    })
    await mydata.save();
    res.status(201).json("Pizza Added");

  } catch (error) {
    res.status(400).json(error);
  }
};


const fetchPizza = (req, res) => {
  const myPizaa =pizza.find()
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(400).json('err');
  })
};


const getCurrentPizza = async (req, res) => {
  try {
    const myPizaa = await pizza.findOne({ pizzaName: req.params.pizzaName });
    if (!myPizaa) {
      return res.status(406).json('not found')
    } else {
      res.status(200).json(myPizaa);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};


const editPizza = async (req, res) => {
  try {
    const myPizaa = await pizza.findOneAndUpdate({ pizzaName: req.params.pizzaName }, req.body, { new: true });
    if (!myPizaa) {
      return res.status(406).json('not found')
    } else {
      res.status(200).json(myPizaa);
    }
  } catch (error) {
    res.status(400).json('error');
  }
};


const deletePizza = async (req, res) => {
  try {
    const myPizaa = await pizza.findOneAndDelete({ pizzaName: req.params.pizzaName });
    if (!myPizaa) {
      return res.status(406).json('not found')
    } else {
      res.status(200).json(myPizaa);
    }
  } catch (error) {
    res.status(400).json('error');
  }
};

module.exports = { addPizza, fetchPizza, getCurrentPizza, editPizza, deletePizza };
