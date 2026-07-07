import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environmental parameters
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Core Global Middleware Engines
app.use(cors({
  origin: 'http://localhost:5173', // Allows access from your local Vite dev panel
  credentials: true
}));
app.use(express.json()); // Parses incoming json request bodies

// 2. Base Diagnostic Verification Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    node: "Foliohub Live Edge Node"
  });
});

// 3. System Listener Hook
app.listen(PORT, () => {
  console.log(`🚀 Foliohub Core API running on port: ${PORT}`);
});