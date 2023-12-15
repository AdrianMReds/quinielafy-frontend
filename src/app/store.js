import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import quinielaReducer from "../features/quinielas/quinielaSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quinielas: quinielaReducer,
  },
});
