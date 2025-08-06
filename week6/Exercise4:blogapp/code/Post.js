import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { id, title, body } = this.props;

    return (
      <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
        <h3>Post {id}</h3>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
