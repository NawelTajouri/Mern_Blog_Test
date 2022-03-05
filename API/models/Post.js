const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema(
    {
        postedBy:{
            type:ObjectId,
            ref:"User"
         },
        title: {type: String, required:true, unique: true},
        desc: {type: String, required: true},
        img: {type: String, required: true},
        likes:[{type:ObjectId,ref:"User"}],

        comments:[{
            text:String,
            commentedBy:{type:String,ref:"User"}
        }],

    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);