import React from "react";

// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";
// import { useSelector } from "react-redux";
import Login from "./components/Login/Login";

const App = () => {
  // const expenses = useSelector((state) => state.expense.expenses);

  // const handleAppEvent = (item) => {
  //   expenses.push(item);
  // };

  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
