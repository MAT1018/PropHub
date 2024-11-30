require('dotenv').config({ path: './.env1' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1); // Exit the process on MongoDB connection failure
    });



// User Schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/signup', async (req, res) => {
    const { fullName, email, phone, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        // Save user to MongoDB
        const newUser = new User({ fullName, email, phone, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        console.error('Error saving user:', err.message); // Log the error
        res.status(500).json({ error: 'Error creating user. Please try again.' });
    }
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Try using a different port.`);
    } else {
        console.error(err);
    }
});

