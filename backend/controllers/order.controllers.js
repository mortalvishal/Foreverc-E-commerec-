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
        res.json({succes:false, message:error.message})
        
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

}

// User order data for the Frontend
const userOrders = async(req,res)=>{

}

// Update order Status from admin panel
const updateStatus = async(req,res) =>{

}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus}

