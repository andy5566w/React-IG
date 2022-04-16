import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./slices/expenseSlice";
const store = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});

export default store;
