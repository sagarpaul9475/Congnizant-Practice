import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [],
  templateUrl: './course-summary-widget.component.html',
  styleUrl: './course-summary-widget.component.css'
})
export class CourseSummaryWidgetComponent implements OnInit {

  totalCourses = 0;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.courseService.getCourses().pipe(
      map(courses => courses.length)
    ).subscribe(length => {
      this.totalCourses = length;
    });

  }

}