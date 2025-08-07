import React from 'react';

const BookDetails = () => {
  const books = [
    { title: 'Master React', price: 670 },
    { title: 'Deep Dive Into Angular 11', price: 800 },
    { title: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{book.title}</span> <br />
            <span style={{ fontSize: '14px' }}>₹{book.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
