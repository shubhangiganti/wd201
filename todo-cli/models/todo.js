// models/todo.js
"use strict";
const { Model, Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      // FILL IN HERE
      const OverDueTasks = await Todo.overdue();
      OverDueTasks.forEach((task) => {
        console.log(task.displayableString());
      });
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      const TodayTasks = await Todo.dueToday();
      TodayTasks.forEach((task) => {
        console.log(task.displayableString());
      });
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      const LaterDueTasks = await Todo.dueLater();
      LaterDueTasks.forEach((task) => {
        console.log(task.displayableString());
      });
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      return await Todo.findAll({
        where: {
          dueDate: { [Op.lt]: new Date() },
        },
        order: [["dueDate", "ASC"]],
      });
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      const today = new Date().toISOString().split("T")[0];
      return await Todo.findAll({
        where: {
          dueDate: today,
        },
        order: [["dueDate", "ASC"]],
      });
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      return await Todo.findAll({
        where: {
          dueDate: {
            [Op.gt]: new Date(),
          },
        },
        order: [["dueDate", "ASC"]],
      });
    }

    static async markAsComplete(id) {
      const task = await Todo.findByPk(id);
      if (task) {
        task.completed = true;
        await task.save();
      }
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    },
  );
  return Todo;
};
