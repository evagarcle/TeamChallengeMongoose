const request = require("supertest")
const app = require("../index")
const { Task } = require("../models/Task")


describe("testing/tasks", () => {
  afterAll(async () => {
    try {
     await Task.deleteMany({});
  
    } catch (error) {
      
    }
  });

  const task = {
    title: "Título de la tarea",
    completed: "Completado"
  };

  test("Create task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send(task)
      .expect(201);

    expect(res.body._id).toBeDefined();
    expect(res.body.createdAt).toBeDefined();
    expect(res.body.updatedAt).toBeDefined();
  });
});