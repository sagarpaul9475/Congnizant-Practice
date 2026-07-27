import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { CourseListComponent } from './pages/course-list/course-list';
import {CourseDetailComponent} from './pages/course-detail/course-detail';
import { StudentProfileComponent } from './pages/student-profile/student-profile';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { NotFoundComponent } from './pages/not-found/not-found';
import { CoursesLayoutComponent } from './pages/courses-layout/courses-layout';
export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'courses',
    component: CourseListComponent
  },

  {
    path: 'courses/:id',
    component: CourseDetailComponent
  },

  {
    path: 'profile',
    component: StudentProfileComponent
  },

  {
    path: 'enroll',
    component: EnrollmentFormComponent
  },

  {
    path: 'enroll-reactive',
    component: ReactiveEnrollmentFormComponent
  },

  {
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'courses',

    component: CoursesLayoutComponent,

    children: [

        {
            path: '',
            component: CourseListComponent
        },

        {
            path: ':id',
            component: CourseDetailComponent
        }

    ]
},

];