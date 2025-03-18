import orderModel from "../models/order.models.js";
import userModel from "../models/user.models.js";

// Placing orders using COD(Cash On Delivery) method
const placeOrder = async(req,res) =>{
    try {
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }
        const newOrder = new orderModel(orderData)
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true, message:"Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}

// Placing orders using Stripe method
const placeOrderStripe = async(req,res) =>{

}


// Placing orders using Razorpay method
const placeOrderRazorpay = async(req,res) =>{

}

// All orders data for admin panel
const allOrders = async(req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// User order data for the Frontend
const userOrders = async(req,res)=>{
    try {
        const {userId} = req.body

        const orders = await orderModel.find({ userId })
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// Update order Status from update status
const updateStatus = async(req,res) =>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}

