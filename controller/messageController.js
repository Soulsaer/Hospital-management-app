import  messageModel  from "../models/messageSchema.js";
import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;
    if (!first_name || !last_name || !email || !phone || !message) {
      return next(new ErrorHandler('Please Fill Full Form!' , 400))
    }

    const newMessage = new messageModel({
      first_name,
      last_name,
      email,
      phone,
      message,
    });

    await newMessage.save();

    return res.status(201).send({
      success: true,
      message: "Message sent successfully",
    });

  } catch (error) {
    return res.status(500).send({
        success: false,
        message: "An error occurred while sending the message",
      });
  }
};


