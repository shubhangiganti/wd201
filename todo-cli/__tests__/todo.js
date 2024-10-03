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

  test("checks retrieval of overdue items", () => {
    add({
      title: "overdue task",
      completed: false,
      dueDate: yesterday,
    });
    expect(all[1].dueDate).toBe(yesterday);
  });

  test("checks retrieval of due Today items", () => {
    add({
      title: "duenow task",
      completed: false,
      dueDate: today,
    });
    expect(all[2].dueDate).toBe(today);
  });

  test("checks retrieval of due later items", () => {
    add({
      title: "laterdue task",
      completed: false,
      dueDate: tomorrow,
    });
    expect(all[3].dueDate).toBe(tomorrow);
  });
});
