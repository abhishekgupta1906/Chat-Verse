import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDB=async () =>{
    try {
     await mongoose.connect(process.env.MONGO_DB_URL);
     console.log('Connected to MongoDB');
    } catch (error) {
        console.log("Error connecting to Mongo",error.message);

        
    }
}

export default connectToMongoDB;
