const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const { verifyToken } = require("../middlewares/Verify");

//REGISTER USER
router.post("/register", async (req,res) =>{
    const FirstName= req.body.FirstName;
    const LastName= req.body.LastName;
    const username= req.body.username;
    const email= req.body.email;
    const password= req.body.password;

  try {
    let user = await User.findOne({ email });
    //1- check if the user already exits
    if (user) {
      return res.status(400).json([{ msg: "This user is already exists" }]);
    }
    //2- create new  user
    user = new User({
      FirstName,
      LastName,
      username,
      email,
      password,
    });

    //3- hash the passord
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    //hash the confirmedpassord
    const saltconf = await bcrypt.genSalt(10);
    
    // 4- save the user
    await user.save();

    //5 - login the user (token)
    const payload = {
      userID: user._id,
    };
    
    const token = jwt.sign(payload, process.env.PASS_SEC, { expiresIn: "1h" }); 
    //6- RESPONSE
    res.send({
      token,
      user
    });
  } catch (error) {
    console.log(error);
  }
})


//LOGIN USER
router.post("/login", async (req, res) => {
  const {email, password } = req.body;
  try {
    //1 check if the user exist
    // let user = await User.findOne({ email,username });
    let user = await User.findOne(
      {email}
    )
  console.log(user)
    if (!user) {
      return res.status(400).json([{ msg: "bad credentials" }]);
    }
    //2 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send([{ msg: "Bad credentials (password) " }]);
    }
    //3 login user (token)4
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.PASS_SEC, { expiresIn: "1h" });
    // const token = "Bearer " + jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    //4- RESPONSE
    res.send({
      token,
      user
    });
  } catch (error) {
    console.log(error);
  }

    
})

router.get('/me', verifyToken , (req,res) =>{
  res.send({ user: req.user })
})
module.exports = router