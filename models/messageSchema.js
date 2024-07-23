import mongoose from "mongoose";
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        minLength: [3, 'First name should be at least 3 characters long'],
        maxLength: [20, 'First name should not exceed 20 characters']
    },

    last_name: {
        type: String,
        required: true,
        minLength: [3, 'Last name should be at least 3 characters long'],
        maxLength: [20, 'Last name should not exceed 20 characters']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address'],
    },

    phone: {
        type: String,
        required: true,
        minLength: 9,
        maxLenght: 14,
        validate : [validator.isNumeric, 'Please enter a valid phone number'],
    },

    message: {
        type: String,
        required: true,
        minLength: 10,
        maxlength: 500,
    }
})


const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;