

const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin"; mern_admin is database name

const URI=process.env.MONGODB_URI;

const connectDb=async()=>{
    try {
        await mongoose.connect(URI);
        console.log('connection successful to database');
        
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
        
    }
}

module.exports = connectDb;
