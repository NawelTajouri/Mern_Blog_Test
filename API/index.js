const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const cors = require('cors');
app.use(cors());
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL
)
.then(() => console.log("DB Connection Successfull!"))
.catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});

