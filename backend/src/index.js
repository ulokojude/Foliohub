import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());          // Enables Cross-Origin Resource Sharing
app.use(express.json());  // Allows your server to parse incoming JSON payloads

// Mock Database Data (We will connect a real database like MongoDB/Postgres next)
const mockPortfolios = {
  alex: {
    fullName: "Alex Rivera",
    title: "Full Stack Developer",
    bio: "Building responsive tools for open-source communities.",
    skills: ["React", "Node.js", "Tailwind v4"]
  },
  sarah: {
    fullName: "Sarah Chen",
    title: "UI/UX Engineer",
    bio: "Designing interactive interfaces that bridge utility and aesthetics.",
    skills: ["Figma", "React", "CSS Grid"]
  }
};

// API Endpoint to fetch a single portfolio by username dynamically
app.get('/api/portfolios/:username', (req, res) => {
  const { username } = req.params;
  const portfolio = mockPortfolios[username.toLowerCase()];

  if (!portfolio) {
    return res.status(404).json({ message: `Portfolio for @${username} not found.` });
  }

  // Send the data back as JSON
  res.json(portfolio);
});

// Root check endpoint
app.get('/', (req, res) => {
  res.send('Foliohub API is running smoothly.');
});

// Start listening
app.listen(PORT, () => {
  console.log(`🚀 API Server running on http://localhost:${PORT}`);
});