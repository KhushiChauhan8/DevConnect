const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require("./routes/authRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

// Connect to DB
connectDB();


//Middleware
app.use(cors());
// app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on http://localhost:${PORT}`)
});

