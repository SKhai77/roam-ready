import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const PostForm = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    refetchQueries: [QUERY_POSTS, "getPosts", QUERY_ME, "me"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postTitle,
          postImage,
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostTitle("");
      setPostImage("");
      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    } else if (name === "postTitle") {
      setPostTitle(value);
    } else if (name === "postImage") {
      setPostImage(value);
    }
  };

  return (
    <div>
      <h3>Wants to share your travel experience?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-6">
              <input
                type="text"
                name="postTitle"
                placeholder="Title"
                value={postTitle}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-6">
              <input
                type="text"
                name="postImage"
                placeholder="Image URL"
                value={postImage}
                className="form-input w-100"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                placeholder="Here's a new post..."
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Post
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your posts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
