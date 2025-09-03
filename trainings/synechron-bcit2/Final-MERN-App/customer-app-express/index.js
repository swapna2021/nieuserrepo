import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import customerRoutes from './Routes/CustomerRoutes.js'
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/customers', customerRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect DB:', err.message);
});