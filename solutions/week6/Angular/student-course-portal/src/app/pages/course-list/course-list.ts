import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  constructor(private courseService: CourseService) {}

  isLoading = true;

  courses: Course[] = [];

  selectedCourseId?: number;

  ngOnInit(): void {

  this.courses = this.courseService.getCourses();

  this.isLoading = true;

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