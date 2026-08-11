import { configureStore } from "@reduxjs/toolkit";

/* ✅ REQUIRED DUMMY REDUCER */
const dummyReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    app: dummyReducer,
  },
});

export default store;