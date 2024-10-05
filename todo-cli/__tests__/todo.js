const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("shubha test suite", () => {
  const formatDate = (date) => date.toISOString().slice(0, 10);
  const today = formatDate(new Date());
  const yesterday = formatDate(new Date(Date.now() - 86400000));
  const tomorrow = formatDate(new Date(Date.now() + 86400000));

  beforeEach(() => {
    all.length = 0; // Reset the array before each test
  });

  test("should add new todo", () => {
    expect(all.length).toBe(0);
    add({
      title: "do homework",
      completed: false,
      dueDate: today, // Use today's date
    });
    expect(all.length).toBe(1);
  });

  test("should mark a todo as complete", () => {
    expect(all.length).toBe(0); // Ensure array is empty before adding
    add({
      title: "do homework",
      completed: false,
      dueDate: today,
    });
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("checks retrieval of overdue items", () => {
    expect(overdue().length).toBe(overdue().length);
    add({ title: "overdue task", completed: false, dueDate: yesterday });
    expect(overdue().length).toBe(overdue().length + 1); // Expect one overdue task
  });

  test("checks retrieval of due Today items", () => {
    expect(dueToday().length).toBe(dueToday().length);
    add({ title: "overdue task", completed: false, dueDate: yesterday });
    expect(dueToday().length).toBe(dueToday().length + 1); // Expect one due today task
  });

  test("checks retrieval of due later items", () => {
    expect(dueLater().length).toBe(dueLater().length);
    add({ title: "overdue task", completed: false, dueDate: yesterday });
    expect(dueLater().length).toBe(dueLater().length + 1); // Expect one due later task
  });
});
