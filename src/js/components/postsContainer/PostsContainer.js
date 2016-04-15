/*
 Renders all Posts
 */

import React, {Component, PropTypes} from 'react';
import Post from '../post';

class PostsContainer extends Component {

  static propTypes = {
    posts: PropTypes.array
  };

  render() {
    const {posts} = this.props;
    return (
      <div>{posts.map((post, key) => <Post post={post} key={key}/>)}</div>
    );
  }
}

export default PostsContainer;
