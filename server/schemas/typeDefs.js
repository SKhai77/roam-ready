// Defining GraphQL type definitions
const typeDefs = `
  # Defining a "User" type with it values
  type User {
    _id: ID!
    username: String
    email: String
    posts: [Post]
  }

  # Defining "Post" type with it values
  type Post {
    _id: ID!
    postTitle: String
    postImage: String
    postText: String
    postState: String
    postCity: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
    likes: [Like]
  }

  # Defining "Comment" type with it values
  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String
  }

    # Defining "Like" type with it values
  type Like {
    _id: ID
    likeText: String!
    likeAuthor: String!
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
    addPost(postTitle: String!, postImage: String, postText: String!, postCity: String!, postState: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
    addLike(postID: ID!): Post
    removeLike(postID: ID!): Post
  }
`;

// Export the "type definitions"
module.exports = typeDefs;
