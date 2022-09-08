const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/domino');  
}
const cartSchema = new mongoose.Schema({
    pizzaName:{
        type:String,
        required:true
    },
    pizzaType:{
        type:String,
        required:true
    },        
    pizzaPrice:{
        type:String,
        required:true
    },
    pizzaImage:{
        type:String,
        required:true
    },
    pizzaQuantity:{
        type:Number
    }
});
const Register = mongoose.model('cart', cartSchema);  
module.exports=Register;