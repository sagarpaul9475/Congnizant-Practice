import './App.css';

import Books from './Books';
import Blogs from './Blogs';
import Courses from './Courses';

import { books, blogs, courses } from './Data';

function App() {

    let showBooks = true;
    let showBlogs = true;
    let showCourses = true;

    const bookdet = showBooks && <Books books={books} />;

    const content = showBlogs ? <Blogs blogs={blogs} /> : null;

    const coursedet = showCourses ? (
        <Courses courses={courses} />
    ) : (
        <h3>No Courses Available</h3>
    );

    return (
        <div className="container">

            <div className="st2">
                <h1>Book Details</h1>
                {bookdet}
            </div>

            <div className="v1">
                <h1>Blog Details</h1>
                {content}
            </div>

            <div className="mystyle1">
                <h1>Course Details</h1>
                {coursedet}
            </div>

        </div>
    );
}

export default App;