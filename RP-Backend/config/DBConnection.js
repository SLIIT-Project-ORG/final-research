const mongodb = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

mongodb.connect(MONGO_URL)
.then(()=>{
    console.log("Mongo DB connection successed")
})
.catch((err)=>{
    console.log(err.getMessage)
})