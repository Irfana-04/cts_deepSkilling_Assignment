import React from 'react';

const BlogDetails = () => {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schwerzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{blog.title}</span> <br />
            <span style={{ fontSize: '14px' }}>{blog.author}</span> <br />
            <span style={{ fontSize: '14px' }}>{blog.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
