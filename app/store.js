import { configureStore } from "@reduxjs/toolkit"
import CounterReducer from "../features/CounterSlice";
import PostReducer from "../features/PostSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostReducer,
  }
})

export default store;