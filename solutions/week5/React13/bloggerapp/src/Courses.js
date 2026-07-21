import React from "react";

function Courses(props) {

    const coursedet = (
        <div>
            {
                props.courses.map((course) => (
                    <div key={course.id}>
                        <h2>{course.cname}</h2>
                        <h4>{course.date}</h4>
                    </div>
                ))
            }
        </div>
    );

    return coursedet;
}

export default Courses;