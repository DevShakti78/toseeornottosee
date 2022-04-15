require("dotenv").config()

const User = require("../model/user.model")

const jwt = require("jsonwebtoken")

const newtoken = (user) => {
return jwt.sign({ user }, process.env.JWT_SECRET_KEY);

}

const register = async (req , res) => {
    try{
        
        let  user = await User.findOne({email:req.body.email}).lean().exec()

        if(user) return res.status(400).send("Please Use another E-Mail")
        
        user = await User.create(req.body)

        const token = newtoken(user)

     return res.status(200).send({user , token})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

const login = async (req , res) => {
    try{

        const user = await User.findOne({email:req.body.email})
        
        if(!user) return res.status(400).send("Please Use another E-Mail OR Password")

         const match = user.checkpassword(req.body.password)
         
         if(!match) return res.status(400).send("Please Use another E-Mail OR Password")

         const token = newtoken(user)

         return res.status(200).send({user , token})

    }catch(err){
        return res.status(500).send(err.message)
    }
}

module.exports ={ register , login}