// const {Schema,model}=require("mongoose");

// const contactSchema=new mongoose.Schema({
//     username:{type:String,required:true},
//    email:{type:String,required:true},
//     message:{type:String,required:true},
// });

// //create a model or a collection

// const Contact=new model("Contact",contactSchema);

// module.exports=Contact;

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

// Create a model or a collection
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
