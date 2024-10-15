import React, { useState } from "react";
import "./styles/App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <div className="total-expenses">
        <h2>Total Used: R{totalExpenses.toFixed(2)}</h2>{" "}
        {/* Display total expenses */}
      </div>
      <footer>
        <p>Coded by Vuledzani Angelinah Marema</p>
      </footer>
    </div>
  );
}

export default App;
