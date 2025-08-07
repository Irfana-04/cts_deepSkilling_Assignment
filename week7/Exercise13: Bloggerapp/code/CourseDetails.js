import React from 'react';

const CourseDetails = () => {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2020' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{course.name}</span> <br />
            <span style={{ fontSize: '14px' }}>{course.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
