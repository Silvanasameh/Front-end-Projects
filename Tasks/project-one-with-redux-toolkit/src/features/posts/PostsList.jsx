import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost,  deletePost } from "./postsSlice";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string()
      .min(3, "Title must be at least 3 characters long")
      .required("Title is required"),
    body: Yup.string()
      .min(10, "Body must be at least 10 characters long")
      .required("Body is required"),
  });

  // Corrected onSubmit handler
  const handleAddPost = (values, { resetForm }) => {
    dispatch(addPost(values)).then(() => {
      resetForm();  // Reset form after submission
      toast.success("Post added successfully");
    });
  };

  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts &&
                posts.map((post) => (
                  <div className="card post-item" key={post.id}>
                    <div className="card-body">
                      <h5>
                        {post.id} - {post.title}
                      </h5>
                      <p className="card-text">{post.body}</p>
                      <div className="postControlButtons">
                      <button   className="btn btn-primary">
                          <FontAwesomeIcon icon={faEdit} /> View More
                        </button>
                      <Link to={`/posts/${post.id}`} className="btn btn-warning">
                       View More
                        </Link>
                        <button  onClick={() => handleDelete(post.id)}  className="btn btn-danger">
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-lg-4">
              <div className="add-post-form">
                <Formik
                  initialValues={{
                    title: "",
                    body: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleAddPost}  // Passing values and formikHelpers to handleAddPost
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div>
                        <Field
                          type="text"
                          className="form-control mb-2"
                          placeholder="Title"
                          name="title"
                        />
                        <ErrorMessage
                          name="title"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <div>
                        <Field
                          as="textarea"
                          className="form-control mb-2"
                          placeholder="Body"
                          rows="4"
                          name="body"
                        />
                        <ErrorMessage
                          name="body"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success"
                        disabled={isSubmitting}
                      >
                        <FontAwesomeIcon icon={faPlus} /> Add Post
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PostsList;