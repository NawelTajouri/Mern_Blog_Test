const jwt = require ("jsonwebtoken");
const User = require("../models/User");

// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//       const token = authHeader.split(" ")[1];
//       jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//         if (err) res.status(403).json("Token is not valid!");
//         req.user = user;
//         next();
//       });
//     } else {
//       return res.status(401).json("You are not authenticated!");
//     }
//   };

const verifyToken = async(req,res,next) => {
    const token =req.headers.authorization;
    try {
    var decoded = jwt.verify(token, process.env.JWT_SEC);
   //  console.log(decoded);
   const user = await User.findById(decoded.userID).select("-password");
   console.log(user)
   if (!user) {
       return res.status(401).json({msg:"UnAuthorized"})
   }
   req.user = user;
   next();
   
}
catch (error) {
   res.status(401).send([{ msg: "UnAuthorized" }]);
 }
};




// const verifyTokenAndAuthorization = (req,res,next) =>{
//     verifyToken(req,res, () => {
//         if (req.user.id === req.params.id || req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("You are not allowed to do that!");
//         }
//     });
// };

const verifyTokenAndAdmin = (req,res,next) =>{
    verifyToken(req,res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAdmin}