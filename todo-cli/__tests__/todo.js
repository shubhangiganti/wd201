const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
describe("shubha test suite ", () => {
  test("should add new todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "do homework",
      completed: false,
      dueDate: new Date().toISOString("en-CA"),
    });
    expect(all.length).toBe(1);
  });
  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
