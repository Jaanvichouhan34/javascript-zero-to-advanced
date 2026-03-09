const Expense = require("./expense");

const expenses = [];

function addExpense(name, amount) {
  const expense = new Expense(name, amount);
  expenses.push(expense);
}

module.exports = { expenses, addExpense };