const Post = require("../models/Post");

const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require("../middlewares/Verify");
const router = require("express").Router();

//CREATE
//Only admin can create a post
// router.post("/", verifyTokenAndAdmin, async (req, res) => {
//   const newPost = new Post(req.body);

//   try {
//     const savedPost = await newPost.save();
//     res.status(200).json(savedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const title = req.body.title;
  const desc = req.body.desc;
  const img = req.body.img;
  // const user= User.findById(req.params._id)
  // if (!title || !message || !picture) {
  //   return res.status(422).json({ error: "Plase add all the fields" });
  // }

  const post = new Post({
    title,
    desc,
    img,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.send({ result });
    })
    .catch((err) => {
      console.log(err);
    });
});
//UPDATE
//only admin can modify a post
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedPost = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
// Only admin can delete a post
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET POST


router.get('/thispost/:id',verifyToken,async (req, res) => {
    try {
      const thispost = await Post.findById(req.params.id);
  
      res.status(200).json({thispost});
    } catch (err) {
      res.status(500).json(err);
    }
});

// //GET ALL Posts

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().populate("postedBy", "_id");
    
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//like a post
router.put("/thispost/like", verifyToken, async (req, res) => {
  Post
    .findByIdAndUpdate(
      req.body.postId,
      {
        $push: { likes: req.user._id },
      },
      {
        new: true,
      }
    )
    .exec((err, result) => {
      if (err) {
        return res.status(422).send({ error: err });
      } else {
        res.send(result);
      }
    });
});
// //unlike a post
router.put("/thispost/unlike", verifyToken, async (req, res) => {
  Post
    .findByIdAndUpdate(
      req.body.postId,
      {
        $pull: { likes: req.user._id },
      },
      {
        new: true,
      }
    )
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

router.put('/thispost/comment',verifyToken, async (req, res) => {
  const comment = {
    text: req.body.text,
    commentedBy: req.user.username,
  };
  Post
    .findByIdAndUpdate(
      req.body.postId,
      {
        $push: { comments: comment },
      },
      {
        new: true,
      }
    )   
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});
module.exports = router;
