import mongoose from "mongoose"
const paymentModel = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
     amount:{
        type:Number,
        required:true
    }
    

},{timestamps:true})

const PAYMENT = mongoose.model('Payment',paymentModel);

export default PAYMENT;