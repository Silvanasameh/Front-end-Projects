import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";
import postsReducer from "../features/posts/postsSlice";
export default configureStore({
  reducer: {
    posts: postsReducer
  },
});
