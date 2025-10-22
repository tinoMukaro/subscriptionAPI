import mongoose from "mongoose";
import process from "process";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('please define your MONGO DB_URI environemnt variable in your .env.<development/production>.local');
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`connected to database in ${NODE_ENV}`)
    }catch(err){
        console.error('Error connecting to database: ', err)
        process.exit(1);

    }
}

export default connectToDatabase;