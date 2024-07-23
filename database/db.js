import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = () => {
  mongoose.connect(process.env.MONGOURL, {
      dbName: process.env.DB_NAME,
    })
    .then(() => {
      console.log("Connected to the database.");
    })
    .catch((error) => {
      console.error("Failed to connect to the database.", error);
    });
};
export default connection;
