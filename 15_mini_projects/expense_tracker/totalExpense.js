const { expenses, addExpense } = require("./addExpense");

addExpense("Food", 200);
addExpense("Travel", 500);
addExpense("Shopping", 300);

function calculateTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  return total;
}

console.log("Total Expense:", calculateTotal());