/*
 Renders workspace consisting of Create Post section and PostsContainer section
 */

import React, {Component} from 'react';
import update from 'react-addons-update';
import CreatePost from '../createPost';
import PostsContainer from '../postsContainer';

class PostWorkspace extends Component {

  state = {
    posts: []
  };

  onAddPost = value => {
    this.setState({
      posts: update(this.state.posts, {$push: [value]})
    });
  };

  render() {
    const {state} = this;
    return (
      <div className="p-w">
        <CreatePost onClick={this.onAddPost}/>
        <PostsContainer posts={state.posts}/>
      </div>
    );
  }
}
export default PostWorkspace;
