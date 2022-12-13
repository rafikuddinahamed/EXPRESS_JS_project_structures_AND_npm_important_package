/* 
REF: -- This topic coverd by Ostad recorded class
----> (Support Class - Topic : Express js Project Structure setup (25.11.22) --- Friday 25 November 2022 : 7.15 PM) - project Structure and npm install
----> Live on Basic JavaScript Part (startarday, 26 noverber, 2022= 26-11-2022) - project Structure understanding and others topic - rouutes -


These packages are used in eachen and every project ------ in MERN Stack Developmetn

Packages :
express, cors, helmet, dotenv, morgan, jsonwebtoken, express-jwt, mongosse, multer, nodemon

###     ---multer--- package is use for ---form handaling - image uploding etc

###     ---corse--- package is use for handel different domain (ami client side e 1 ta port e run korabo r seta back-end e r ekta port e run hobe -- shortly evaber bola jay ---  eta muluto security  er jonno  )

###     ---express-jwt--- package is use for -- authentication and authorization
jsonwebtoken package use for authentication and authorization

###     ---morgan--- package is use for --- morgan is a Node. js and Express middleware to log HTTP requests and errors, and simplifies the process.(req,error etc egula console e dekar jono)


install way : 1st Example --->   npm install express     2nd Example --->   npm install dotenv ---or--- finale Exlample ---> npm i express cors helmet dotenv morgan jsonwebtoken express-jwt mongoose multer nodemon

(important topic)- Express JS Handle two topic . 1. Middleware 2. Routes


*/



const express = require('express');
const app = express();
const helmet = require('helmet');       //This packege is for secquety
const mongoose = require('mongoose');
require("dotenv").config();
const morgan = require('morgan');
const cors = require('cors');
const {readdirSync} = require('fs')




/*

There are two kind of middlewares
1. Route middlewares       -- Route middleware means it will be used specific route in this project
2. Application middlewares -- Application middleware means it will be used everywhere in this project --> EXAMPLE:- app.use(helmet())

*/



//middlewares
app.use(helmet());                      // use for 12 secquety item
app.use(express.static('public'));      // ei line tar mane public folder e jakichu ache seta use korte parbo eachen and every project uses express.static() methods
app.use(express.json());                // for handle json data---eachen and every project uses this functoin express.json()
app.use(express.urlencoded({extended: false})); // url er modde bivinno kaj korar jonno amra eta use kore take jemon data pass kora etc.
app.use(morgan("dev"));
app.use(cors());





mongoose.set('strictQuery', true) // eta ami exta add korechei console e warnig pawar karone







//DB Connection
mongoose
    .connect(process.env.DATABASE)
    .then(()=> console.log("DB connected"))
    .catch((err)=> console.log("DB Error ===>", err))




    
//routes middleware
readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))


   
//server
const port = process.env.PORT || 8000;
 
app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})


 















