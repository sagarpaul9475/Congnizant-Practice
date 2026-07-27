import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'React',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Node.js',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 4,
      name: 'Java',
      code: 'CS104',
      credits: 5,
      gradeStatus: 'passed'
    },
    {
      id: 5,
      name: 'Spring Boot',
      code: 'CS105',
      credits: 4,
      gradeStatus: 'pending'
    }
  ];

  selectedCourseId?: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}