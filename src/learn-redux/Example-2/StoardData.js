import { createStore } from "redux";
import ReducerCount, { authSlicer, counterSlice } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";

//  const store = createStore(counterSlice.reducer)
const store = configureStore({
    reducer : { counter : counterSlice.reducer, auth : authSlicer.reducer}
})
export const counterActions = counterSlice.actions
export const authActions = authSlicer.actions
 export default store;