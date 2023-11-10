// Defining GraphQL type definitions
const typeDefs = `
  # Defining a "User" type with it values
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
  }

  # Defining "Post" type with it values
  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  # Defining "Comment" type with it values
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  # Defining an "Auth" type with it values
  type Auth {
    token: ID!
    user: User
  }

  # Defining "Query" type with it values
  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
    me: User
  }

  # Defining "Mutation" types
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    likePost(postID: ID!): Post
  }
`;

// Export the "type definitions"
module.exports = typeDefs;
