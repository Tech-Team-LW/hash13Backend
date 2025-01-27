import mongoose from "mongoose";
import { DB_NAME } from "../constants";


const connnectDB = async ()=>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`\n MongoDB connected !! successfully DB HOST = ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("ErroR in connecting the DATABASE",error);
        process.exit(1);
        //  or insted of process.exit(1) we can use  throw error
        // process is a refrence of current node process
    }
}

export default connnectDB;