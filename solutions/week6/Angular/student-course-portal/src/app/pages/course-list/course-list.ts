import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses = [
  {
    id: 1,
    name: 'Angular',
    code: 'CS101',
    credits: 4
  },
  {
    id: 2,
    name: 'React',
    code: 'CS102',
    credits: 3
  },
  {
    id: 3,
    name: 'Node.js',
    code: 'CS103',
    credits: 4
  },
  {
    id: 4,
    name: 'Java',
    code: 'CS104',
    credits: 5
  },
  {
    id: 5,
    name: 'Spring Boot',
    code: 'CS105',
    credits: 4
  }
];

selectedCourseId?: number;

onEnroll(courseId: number) {
  console.log('Enrolling in course:', courseId);
  this.selectedCourseId = courseId;
}

}