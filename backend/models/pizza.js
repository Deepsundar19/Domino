const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/domino');  
}
const employeeSchema = new mongoose.Schema({
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
    }
});
const Register = mongoose.model('pizza', employeeSchema);  
module.exports=Register;