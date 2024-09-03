const Schema = require('mongoose').Schema;
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');

const userSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true
    },
    usertype: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    mobileno: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
        required:true
    }
})

userSchema.methods.generateAuthToken = function() {
    const jwttoken = jwt.sign({_id: this._id,usertype: this.usertype,username: this.username},process.env.JWTPRIVATEKEY,{expiresIn: "1440"});
    return jwttoken;
}

const User = mongoose.model("users", userSchema);
module.exports = User;