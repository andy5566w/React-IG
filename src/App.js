import React from 'react'

// import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense/NewExpense";
// import { useSelector } from "react-redux";
// import Login from './components/Login/Login'
import Clock from './components/Clock/Clock'

const App = () => {
  // const expenses = useSelector((state) => state.expense.expenses);

  // const handleAppEvent = (item) => {
  //   expenses.push(item);
  // };

  return (
    <React.Fragment>
      <Clock />
    </React.Fragment>
  )
}

export default App
