import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/courses';

  private courses: Course[] = [

    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 4,
      gradeStatus: 'passed'
    },

    {
      id: 2,
      name: 'React',
      code: 'REA102',
      credits: 3,
      gradeStatus: 'pending'
    },

    {
      id: 3,
      name: 'Node.js',
      code: 'NOD103',
      credits: 4,
      gradeStatus: 'failed'
    },

    {
      id: 4,
      name: 'Java',
      code: 'JAV104',
      credits: 5,
      gradeStatus: 'passed'
    },

    {
      id: 5,
      name: 'Spring Boot',
      code: 'SPR105',
      credits: 4,
      gradeStatus: 'pending'
    }

  ];
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

    return this.http.post<Course>(

        this.apiUrl,

        course

    );

}

  getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(this.apiUrl);
}

  getCourseById(id: number): Observable<Course> {
  return this.http.get<Course>(`${this.apiUrl}/${id}`);
}

  addCourse(course: Course): void {
    this.courses.push(course);
  }
  updateCourse(course: Course): Observable<Course> {

    return this.http.put<Course>(

        `${this.apiUrl}/${course.id}`,

        course

    );

}
deleteCourse(id: number): Observable<void> {

    return this.http.delete<void>(

        `${this.apiUrl}/${id}`

    );

}

}

export type { Course };
