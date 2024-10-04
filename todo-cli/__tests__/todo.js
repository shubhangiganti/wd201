const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();
describe("shubha test suite ", () => {
  const formatDate = (date) => date.toLocaleDateString("en-CA");
  const today = formatDate(new Date());
  const yesterday = formatDate(new Date(Date.now() - 86400000));
  const tomorrow = formatDate(new Date(Date.now() + 86400000));

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
    expect(overdue().length).toBe(over.length);
  });

  test("checks retrieval of due Today items", () => {
    expect(dueToday().length).toBe(toda.length + 1);
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toBe(later.length);
  });
});
