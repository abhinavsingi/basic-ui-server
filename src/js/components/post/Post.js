import React, {PropTypes} from 'react';

const Post = ({post}) => (
  <div>{post}</div>
);

Post.propTypes = {
  post: PropTypes.string
};

export default Post;
