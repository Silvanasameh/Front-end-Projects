import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { updatePost } from "./postsSlice";
const PostDetailPage = () => {
  const { postId } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch post details from API
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.error('Error fetching post details:', error));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default PostDetailPage;

