const express = require('express');
const jwt = require("jsonwebtoken");
const secret_key = "mynameisdeepsundarbehera";
const userAuthentication =require("../models/userAuthentication");
const adminAuthentication =require("../models/adminAuthentication");

const userSignup =async (req,res) =>{
    try {
        const {name,email,phone,password,confirmPassword} =req.body;

        const existingUser = await userAuthentication.findOne({email:email});
        if(existingUser){
            return res.status(404).json({message:"User is already exist"});
        }

        else if (password === confirmPassword) {
            const mydata = new userAuthentication({
                name: name,
                email: email,
                phone: phone,
                password: password
            });
            await mydata.save();
            
            const token = jwt.sign({ email: mydata.email.toString() }, secret_key);
            res.status(201).json({ success: true, message: "Account has been created",token:token });
            console.log(token);

        } else {
            res.status(404).json("password not matching!");
        }
    } catch (error) {
        res.status(400).json('error');
    }    
};

const userLogin =async (req,res) =>{
    try {
        const {email,password} =req.body;

        const useremail = await userAuthentication.findOne({ email: email });
        if (!useremail) {
            return res.status(400).json({ success: false, message: "User not found" });
        } else if (useremail.password === password) {
            const token = jwt.sign({ email: useremail.email.toString() }, secret_key);
            
            res.status(201).json({ success: true, message: "Successfully Logged In",token:token });
            console.log(token);

        } else {
            res.status(400).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).json("Error");
    }
};

const adminSignup= async (req,res) =>{
    try {
        const {name,email,phone,password,confirmPassword} =req.body;

        const existingUser = await adminAuthentication.findOne({email:email});
        if(existingUser){
            return res.status(404).json({message:"User is already exist"});
        }

        else if (password === confirmPassword) {
            const mydata = new adminAuthentication({
                name: name,
                email: email,
                phone: phone,
                password: password
            });
            await mydata.save();
            
            const token = jwt.sign({ email: mydata.email.toString() }, secret_key);
            res.status(201).json({ success: true, message: "Account has been created",token:token });
            console.log(token);

        } else {
            res.status(404).json("password not matching!");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};

const adminLogin= async(req,res) =>{
    try {
        const {email,password} =req.body;

        const useremail = await adminAuthentication.findOne({ email: email });
        if (!useremail) {
            return res.status(404).json({ success: false, message: "User not found" });
        } else if (useremail.password === password) {
            const token = jwt.sign({ email: useremail.email.toString() }, secret_key);
            
            res.status(201).json({ success: true, message: "Successfully Logged In",token:token });
            console.log(token);

        } else {
            res.status(404).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).json("Error");
    }
};

module.exports ={userSignup,userLogin,adminSignup,adminLogin};