const { request, respone } = require("express");
const express = require("express");
const app = express();
const { Todo } = require("./models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/todos", (request, response) => {
  console.log("Todo list");
});

app.post("/todos", async (request, response) => {
  console.log("creating a todo....", request.body);
  try {
    const todo = await Todo.addTodo({
      title: request.body.title,
      dueDate: request.body.dueDate,
      completed: false,
    });
    return response.json(todo);
  } catch (error) {
    console.log(error);
    return response.status(422).json(error);
  }
});

app.put("/todos/:id/markAsCompleted", async (request, response) => {
  console.log("We have to update a todo with ID:", request.params.id);
  const todo = await Todo.findbyPk(request.params.id);
  const updatedTodo = await todo.markAsCompleted();
});

app.delete("/todos/:id", (request, response) => {
  console.log("delete a todo by ID:", request.params.id);
});

app.listen(3000, () => {
  console.log("Started express in server number 3000");
});
