const express = require("express")
const router = express.Router()
const TaskController = require("../controllers/TaskController")



router.post("/", TaskController.create)
router.get("/", TaskController.getAll)
router.get("/id/:_id", TaskController.getById)
router.get("/title/:title", TaskController.getTaskByTitle)


module.exports = router