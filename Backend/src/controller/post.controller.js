const express = require("express")

const Post = require("../model/post.model")

const authnetion = require("../middleware/authention")

const crudController = require("./curd.controller")

const router = express.Router()


router.post(""  , authnetion ,  async (req , res) =>{
    try{
     req.body.user_id = req.user._id;
     const post = await Post.create(req.body)
     return res.status(201).send(post);

    } catch (err) {
      return res.status(500).send(err.message);
    }
})

router.get(""  ,authnetion, crudController(Post).getAll)

router.patch("/:id",authnetion  , crudController(Post).updateOne)

router.get("/:id", authnetion,crudController(Post).getOne)

router.delete("/:id",authnetion, crudController(Post).deleteOne)


module.exports = router