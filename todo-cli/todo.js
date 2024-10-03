const todoList = () => {
  all = [];
  const formatDate = (date) => date.toLocaleDateString("en-CA");

  const today = formatDate(new Date()); // Current date
  const yesterday = formatDate(new Date(Date.now() - 86400000));
  const tomorrow = formatDate(new Date(Date.now() + 86400000));

  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    over = [];
    all.forEach((element) => {
      if (element.dueDate === yesterday) {
        over.push(element);
      }
    });
    return over;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    toda = [];
    all.forEach((element) => {
      if (element.dueDate === today) {
        toda.push(element);
      }
    });
    return toda;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    later = [];
    all.forEach((element) => {
      if (element.dueDate === tomorrow) {
        later.push(element);
      }
    });
    return later;
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list
      .map((item) => {
        const status = item.completed ? "[x]" : "[ ]";
        const showDate = item.dueDate === today ? "" : item.dueDate;
        return `${status} ${item.title} ${showDate}`;
      })

      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #
module.exports = todoList;
