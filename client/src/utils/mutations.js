import { gql } from "@apollo/client";
// Mutation for user login
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// Mutation for adding a new user
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// Mutation for adding a new post
export const ADD_POST = gql`
  mutation addPost($postTitle: String, $postImage: String, $postText: String!) {
    addPost(postTitle: $postTitle, postImage: $postImage, postText: $postText) {
      _id
      postTitle
      postImage
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
      },
      likes {
        _id
        likeText
      }
    }
  }
`;
// Mutation for removing a post
export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;
// Mutation for adding a comment
export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
// Mutation for removing a comment
export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        _id
      }
    }
  }
`;
// Mutation for adding a like
export const ADD_LIKE = gql`
  mutation addLike($postId: ID!, $likeText: String!) {
    addLike(postId: $postId, likeText: $likeText) {
      _id
      postText
      postAuthor
      createdAt
      likes {
        _id
        likeText
        createdAt
      }
    }
  }
`;
// Mutation for removing a like
export const REMOVE_LIKE = gql`
  mutation removeLike($postId: ID!, $likeId: ID!) {
    removeLike(postId: $postId, likeId: $likeId) {
      likes {
        _id
      }
    }
  }
`;
