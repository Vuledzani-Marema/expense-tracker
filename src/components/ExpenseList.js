import React from "react";

const ExpenseList = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name}: ${expense.amount.toFixed(2)}
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
