import express from "express";
import {sendMessage} from '../controller/messageController.js';

const router = express.Router();

// Define API routes

router.post("/send", sendMessage);

export default router;
