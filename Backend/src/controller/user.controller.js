const express = require("express")

const User = require("../model/user.model")

const crudController = require("./curd.controller")

const router = express.Router()

router.post("/" , crudController(User).post)

router.get(""  , crudController(User).getAll)

router.patch("/:id"  , crudController(User).updateOne)

router.get("/:id"  , crudController(User).getOne)

router.delete("/:id"  , crudController(User).deleteOne)


module.exports = router