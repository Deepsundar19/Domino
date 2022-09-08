const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/domino');
}
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String
    },
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
});

// employeeSchema.methods.generateAuthToken = async function () {
//     try {
//         console.log(this.email)
//         const tokenn = jwt.sign({ email: this.email.toString()}, "mynameisdeepsundarbehera");
//         this.tokens = this.tokens.concat({token:tokenn});
//         await this.save();
//         return tokenn;
//     } catch (error) {
//         res.json(error);
//         console.log(error);
//     }
// }

const Register = mongoose.model('user_details', employeeSchema);
module.exports = Register;