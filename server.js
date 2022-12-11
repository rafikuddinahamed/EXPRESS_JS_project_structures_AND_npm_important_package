/* REF: -- This topic coverd by Ostad recorded class (Support Class - Topic : Express js Project Structure setup (25.11.22) --- Friday 25 November 2022 : 7.15 PM) */

//These packages are used in eachen and every project ------ in MERN Stack Developmetn

//Packages :
//express, cors, helmet, dotenv, morgan, jsonwebtoken, express-jwt, mongosse, multer, nodemon

// install way : 1st Example --->   npm install express     2nd Example --->   npm install dotenv ---or--- finale Exlample ---> npm i express cors helmet dotenv morgan jsonwebtoken express-jwt mongosse multer nodemon


const express = require('express');
const app = express();
const helmet = require('helmet');       //This packege is for secquety
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors');
const {readdirSync} = require('fs')



//There are two kind of middlewares
// 1. Route middlewares       -- Route middleware means it will be used specific route in this project
// 2. Application middlewares -- Application middleware means it will be used everywhere in this project




//middlewares
app.use(helmet());
app.use(express.static('public'));      // ei line tar mane public folder e jakichu ache seta use korte parbo eachen and every project uses express.static() methods
app.use(express.json());                // for handle json data---eachen and every project uses this functoin express.json()
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());


mongoose.set('strictQuery', true) // eta ami exta add korechei console e warnig pawar karone



//DB Connection
mongoose
    .connect(process.env.DATABASE)
    .then(()=> console.log("DB connected"))
    .catch((err)=> console.log("DB Error ===>", err))




//server
const port = process.env.PORT || 8000;
 
app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})


 


















