import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch Posts data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

// Add a new post
export const addPost = createAsyncThunk("posts/addPost", async (postInfo) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    postInfo
  );
  return response.data;
});

// Update a Post
export const updatePost = createAsyncThunk("posts/updatePost", async (updatedPost) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${updatedPost.id}`,
    updatedPost
  );
  return response.data;
});

// Delete a Post
export const deletePost = createAsyncThunk("posts/deletePost", async (postId) => {
  // Deleting the post from the backend (mock)
  await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  return postId; // Return the postId to know which post to remove from the state
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        // Remove the post from the state based on the postId
        state.posts = state.posts.filter(post => post.id !== action.payload);
      });
  },
});

// Export the reducer
export default postsSlice.reducer;



