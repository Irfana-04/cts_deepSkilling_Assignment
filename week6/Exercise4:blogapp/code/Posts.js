import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

 
  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error });
    }
  };


  componentDidMount() {
    this.loadPosts();
  }


  componentDidCatch(error, info) {
    alert("An error occurred: " + error.message);
    this.setState({ error });
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p>Error loading posts.</p>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}           
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
