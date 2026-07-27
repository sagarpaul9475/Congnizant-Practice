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
      name: 'Angular',
      code: 'CS101',
      credits: 4
    },
    {
      name: 'React',
      code: 'CS102',
      credits: 3
    },
    {
      name: 'Node.js',
      code: 'CS103',
      credits: 4
    }
  ];

}