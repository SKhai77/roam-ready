import { Link } from 'react-router-dom';

const PostList = ({
  
  title,
  description,
  image,
  showTitle = true,
  showUsername = true,
}) => {
  if (!post.length) {
    return <h3>No Post Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.title}`}
                >
                  {post.title} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this post on {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this post on {post.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.image}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>{post.description}</p>
            </div>
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the posting on this Blog.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
