// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import {Container,Card}  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { QUERY_SINGLE_POST } from "../utils/queries";

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Container fluid>
      <Card>
     
    
    <Card.Title>
      <h3 className="card-header bg-dark text-light p-2 m-0">
        <span className="postTitle">{post.postTitle}</span>
        <br />

        <span style={{ fontSize: "1.3rem" }}>{post.postAuthor} </span>

        <span style={{ fontSize: "1rem" }}>
          had this blog post on {post.createdAt}
        </span>
      </h3>
      </Card.Title>
      <Card.Img  src={post.postImage}
            alt={`Image for ${post.postTitle} by ${post.postAuthor}`}>
      
       </Card.Img>
       <Card.Text>
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {post.postText}
        </blockquote>
        </Card.Text>
    
      <Card.Footer>
       
        <CommentList comments={post.comments} />
 
 
        <CommentForm postId={post._id} />

      </Card.Footer>
      </Card>
   
 
    </Container>
  );
};

export default SinglePost;
