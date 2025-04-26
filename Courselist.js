import React from 'react';
import CourseCard from './CourseCard';
import './Course.css';

function CourseList({ courses }) {
    return {
        <div classname="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />  
        ))}
        </div>
    };
}

export default CourseList;