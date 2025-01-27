import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 3000;

// Initialize Express
const app = express();
app.use(express.json());
app.use(cors());



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });