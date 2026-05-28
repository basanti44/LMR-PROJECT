import bcrypt from"bcryptjs";
import express from"express";
import User from"../models/User.js";

const router = express.Router();


// REGISTER
router.post("/register", async (req, res) => {

  try {

    const{name,email,password} = req.body;

     const hashedPassword = await 
     bcrypt.hash(password, 10);
     const newUser = new User({
      name,
      email,
      password: hashedPassword
     });

     await newUser.save();
     
    res.status(201).json({
      message: "User registered successfully",
      user: newUser
    });
    
  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});


// LOGIN
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }
    const isMatch = await 
    bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }

    res.status(200).json({
      message: "Login Successful",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });

  }

});

export default router;