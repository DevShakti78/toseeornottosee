require("dotenv").config()

const express = require("express");

const { body, validationResult } = require('express-validator');

const app = express();

const User = require("./model/user.model")

const connect = require("./configs/db");

app.use(express.json())

const userController = require("./controller/user.controller")

const postcontroller = require("./controller/post.controller")

const { register , login} = require("./controller/auth.controller")

app.use("/register" , body("name").isAlpha().bail().isLength({min:3 , max:50}),
body("email").isEmail().custom(async value =>{
  const user = await User.findOne({email:value});
  if(user){
   throw new Error("Check Email Or Password")
  } 
  return true;
 
 
}),body("password")
.isLength({ min: 6, max: 20 }).bail()
// .custom((value) => {
//   let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//   if (pattern.test(value)) {
//     return true;
//   }
//   throw new Error("Password is not strong");
// })
,

async (req ,res , next) => {
    try{
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }
        next()

    }catch(err){
       return res.status(500).send({ message: err.message });
    }
  
} , register )




app.use("/login"  ,body("email").custom(async value =>{
  const user = await User.findOne({email:value});
  if(!user){
   throw new Error("Check Email Or Password")
  } 
  return true;
 
 
}),body("password")
.isLength({ min: 6, max: 20 }).bail()
// .custom((value) => {
//   let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//   if (pattern.test(value)) {
//     return true;
//   }
//   throw new Error("Password is not strong");
// })
,
async (req ,res ,next ) => {
    try{
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
       }
     next()
       
     
    }catch(err){
       return res.status(500).send({ message: err.message });
    }}, login )


    
app.use("/user" , userController )
app.use("/post" , postcontroller)

const port = process.env.PORT

app.listen(port , async () => {
  try {
    await connect();
    console.log("port 2489");
  } catch (err) {
    console.log(err.message);
  }
});
