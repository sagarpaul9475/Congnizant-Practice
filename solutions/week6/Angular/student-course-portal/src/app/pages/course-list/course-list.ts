import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
constructor(

    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute

) {}
viewCourse(courseId: number) {

    this.router.navigate([
        'courses',
        courseId
    ]);

}

  isLoading = true;
  errorMessage = '';

  courses: Course[] = [];
  searchTerm = '';

  selectedCourseId?: number;

  ngOnInit(): void {

  this.isLoading = true;

  this.courseService.getCourses().subscribe({

    next: (courses) => {

      this.courses = courses;

    },

    error: (err) => {

      this.errorMessage = err.message;

    },

    complete: () => {

      this.isLoading = false;

    }

  });

}
searchCourses() {

    this.router.navigate(

        ['courses'],

        {

            queryParams: {

                search: this.searchTerm

            }

        }

    );

}

  onEnroll(courseId: number) {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}