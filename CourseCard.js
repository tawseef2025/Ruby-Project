import React from 'react';
import './CourseCard.css';

function CourseCard({ course-card}) {
    const handleEnroll = () => {
        console.log(`Enrolled in: $(course.title)`);
    };

    return (
        <div className='course-card'>
            <h3>{course.title}</h3>
            <p>(course.description</p>
            <button onClick={handleEnroll}>Enroll Now<button>
        </div>
    );
}

export default CourseCard;