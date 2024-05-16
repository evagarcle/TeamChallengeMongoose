const Task = require("../models/Task")


const TaskController = {
  async create(req,res) {
    try {
      const task = await Task.create(req.body)
      res.status(201).send(task)
    } catch (error) {
      console.error(error)
      res.status(500).send("Ha habido un error al crear la tarea")
    }
  }
}



module.exports = TaskController