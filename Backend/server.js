const express = require("express");
const connectDb = require("./DB/dbCon");
const User = require("./DB/userSchema");
const Mentor = require("./DB/MentorSchema");
const Request = require("./DB/RequestSchema");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const port = 5000;
const JWT_SECRET = "your-secret-key";

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    credentials: true
}));

// Register endpoint
app.post('/api/register', async (req, res) => {
    try {
        const { email, password, name, role } = req.body;
        
        // Check if email exists in either collection
        const existingUser = await User.findOne({ email });
        const existingMentor = await Mentor.findOne({ email });
        
        if (existingUser || existingMentor) {
            return res.status(400).json({ error: "Email already registered" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user or mentor based on role
        if (role === 'mentor') {
            const mentor = new Mentor({
                email,
                password: hashedPassword,
                name
            });
            await mentor.save();
        } else {
            const user = new User({
                email,
                password: hashedPassword,
                name
            });
            await user.save();
        }

        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "Registration failed" });
    }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        // Check the appropriate collection based on role
        const Model = role === 'mentor' ? Mentor : User;
        const user = await Model.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { 
                id: user._id, 
                email: user.email,
                role: role 
            },
            JWT_SECRET,
            { expiresIn: "24h" }
        );

        // Send response with role-specific data
        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                role: role,
                ...(role === 'mentor' ? {
                    specialty: user.specialty,
                    experience: user.experience,
                    rating: user.rating,
                    reviews: user.reviews
                } : {})
            }
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Login failed" });
    }
});

// Get all mentors
app.get('/api/mentors', async (req, res) => {
    try {
        const mentors = await Mentor.find({}, '-password');
        res.json(mentors);
    } catch (error) {
        console.error("Error fetching mentors:", error);
        res.status(500).json({ error: "Failed to fetch mentors" });
    }
});

// Create a connection request
app.post('/api/requests', async (req, res) => {
    try {
        const { userId, mentorId, userName } = req.body;
        const newRequest = new Request({ userId, mentorId, userName });
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        console.error("Error creating request:", error);
        res.status(500).json({ error: "Failed to create request" });
    }
});

// Get requests for a mentor
app.get('/api/requests/:mentorId', async (req, res) => {
    try {
        const requests = await Request.find({ mentorId: req.params.mentorId }).populate('userId', 'name');
        res.json(requests);
    } catch (error) {
        console.error("Error fetching requests:", error);
        res.status(500).json({ error: "Failed to fetch requests" });
    }
});

// Initialize database connection
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.error("Failed to connect to MongoDB:", err);
});