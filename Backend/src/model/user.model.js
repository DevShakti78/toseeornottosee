const mongoose = require("mongoose")

const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type:String , require:true},
    email:{type:String , require:true , unique:true},
    password:{type:String , required:true}
},{
    versionKey:false,
    timestamps:true
})


userSchema.pre("save" , function (next){
    if (!this.isModified("password")) return next();


    const hash = bcrypt.hashSync( this.password, 4)
    this.password = hash

    return next()
});


userSchema.methods.checkpassword = function(password){
    return bcrypt.compareSync(password , this.password)
}

module.exports = mongoose.model("user_a" ,userSchema)