import React, { usestate } from 'react';
import Header from './Header';
import Footer from './Footer';
import CourseList from './CourseList';
import './App.css';

function App() {
  const [course] = usestate([
    { id:1, title: 'Intro to HTML & CSS'. description: 'Learn the basics of Web development.'},
    { id:2, title: 'JavaScript Essentials', description:'Master the fundamentals of 
      JavaScript.'},
      { id:3, title:'React for Beginners', description: 'Start buliding dyamic UIs
        with React.'},
      });

      return (
        <div className='app'>
          <Header />
          <main>
            <CourseList courses={course} />
          </main>
          <Footer />
        </div>  
      );
    }

    export default App;

