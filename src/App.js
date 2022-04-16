import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useSelector } from "react-redux";

const App = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const handleAppEvent = (item) => {
    expenses.push(item);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense handleAppEvent={handleAppEvent} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
