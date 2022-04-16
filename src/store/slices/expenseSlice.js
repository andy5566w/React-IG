import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      title: "Toilet Paper2222",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)222",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ],
};

const expenseSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addExpense(state, action) {
      const expense = action.payload;
      state.expenses.push(expense);
    },
  },
});

export default expenseSlice;
