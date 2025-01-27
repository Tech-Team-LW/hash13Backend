require('dotenv').config({path:"./env"})
import express from 'express';
import cors from 'cors';

import connnectDB from './db/index';

// connect to database
connnectDB()
// Load environment variables

const PORT = process.env.PORT || 3000;

console.log("port number is =  ",PORT)


// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());

// Health Check Route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

