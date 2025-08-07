import React from 'react';
import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <div className="App">
      <h1>Blogger App</h1>
      <div className="container">
        <div className="column">
          <CourseDetails />
        </div>
        <div className="column divider">
          <BookDetails />
        </div>
        <div className="column">
          <BlogDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
