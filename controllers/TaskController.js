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
  },
  async getAll(req,res) {
    try {
      const tasks = await Task.find()
      res.send({msg: "Todos las tareas: " , tasks})
    } catch (error) {
      console.error(error)
      res.status(500).send("Ha habido un error")
    }
  },
  async getById(req,res) {
    try {
      const task = await Task.findById(req.params._id)
      res.send({msg: "Tarea encontrada", task})
    } catch (error) {
      console.error(error)
      res.status(500).send("Ha habido un error encontrando la tarea")
    }
  },
  async getTaskByTitle(req,res) {
    try {
      const title = new RegExp(req.params.title, "i")
      const task = await Task.find({ title })
      res.send({msg:"Tarea encontrada", task})
    } catch (error) {
      console.error(error)
      res.status(500).send("Ha habido un error encontrando la tarea por título")
    }
  },
  async update(req,res) {
    try {
      const task = await Task.findByIdAndUpdate(req.params._id, req.body, {new:true})
      res.send({msg: "Tarea actualizada con éxito", task})
    } catch (error) {
      console.error(error)
      res.status(500).send("Ha habido un error actualizando la tarea")
    }
  }
}



module.exports = TaskController