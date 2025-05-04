// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");    
// const User = require("../models/userModel");

// router.post("/register", async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         // check if user already exists
//         const existingUser = await User.findOne({ email });
//         if(existingUser) {
//             return res.status(400).json({ message: "User already exist" })
//         }

//         // Hash password 
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Save user
//         const user = await User.create({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         // create token
//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//             expiresIn: "7d",
//         });

//         res.status(201).json({
//             message: "User registered successfully ✅",
//             token,
//             user: {
//                 id: user._id,
//                 username: user.username,
//                 email: user.email,
//             },
//         });
//     } catch(error) {
//         res.status(500).json({ message: "Something went wrong ❌", error });
//     }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/authController");

// Register route
router.post("/register", registerUser);

module.exports = router;
