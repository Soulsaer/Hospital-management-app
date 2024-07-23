import  messageModel  from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;
    if (!first_name || !last_name || !email || !phone || !message) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
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


