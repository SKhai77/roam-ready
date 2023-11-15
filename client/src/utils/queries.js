import { gql } from "@apollo/client";
// Query to get a single user's data
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postTitle
        postImage
        postText
        createdAt
      }
    }
  }
`;
// Query to get multiple posts
export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postTitle
      postImage
      postText
      postAuthor
      createdAt
    }
  }
`;
// Query to get a single post
export const QUERY_SINGLE_POST = gql`
  query getSinglePost($postId: ID!) {
    post(postId: $postId) {
      _id
      postTitle
      postImage
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
      likes {
        _id
        likeText
        likeAuthor
        createdAt
      }
    }
  }
`;
// Query to get the logged-in user's data
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postTitle
        postImage
        postText
        postAuthor
        createdAt
      }
    }
  }
`;
