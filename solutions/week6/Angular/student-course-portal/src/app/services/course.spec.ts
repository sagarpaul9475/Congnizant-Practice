import { CourseService } from './course.service';
import {

TestBed

} from '@angular/core/testing';
import {

provideMockStore,

MockStore

} from '@ngrx/store/testing';
import {

provideHttpClient

} from '@angular/common/http';

import {

provideHttpClientTesting,

HttpTestingController

} from '@angular/common/http/testing';
import { CourseListComponent } from '../pages/course-list/course-list';

describe('CourseService', () => {

  let service: CourseService;

  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({

      providers: [

        CourseService,

        provideHttpClient(),

        provideHttpClientTesting()

      ]

    });

    service = TestBed.inject(CourseService);

    httpMock = TestBed.inject(

      HttpTestingController

    );

  });

  const mockCourses = [

{

id:1,

name:'Angular',

code:'ANG101',

credits:4,

gradeStatus:'passed'

},

{

id:2,

name:'React',

code:'RE101',

credits:3,

gradeStatus:'passed'

}

];
it('should return all courses', () => {

  service.getCourses().subscribe(

    courses => {

      expect(

        courses.length

      ).toBe(2);

      expect(

        courses

      ).toEqual(mockCourses);

    }

  );

  const req =
    it('should return all courses', () => {

      service.getCourses().subscribe(

        courses => {

          expect(

            courses.length

          ).toBe(2);

          expect(

            courses

          ).toEqual(mockCourses);

        }

      );

      const req =
        httpMock.expectOne(
          'http://localhost:3000/courses'
        );

      expect(req.request.method)
        .toBe('GET');

      req.flush(mockCourses);

    });

  });
  it('should handle server error', () => {

  service.getCourses().subscribe({

    next: () =>

      fail('Expected an error'),

    error: err => {

      expect(

        err.message

      ).toContain(

        'Failed to load courses'

      );

    }

  });

  const req =

    httpMock.expectOne(

      'http://localhost:3000/courses'

    );

  req.flush(

    'Server Error',

    {

      status:500,

      statusText:'Internal Server Error'

    }

  );

});
const initialState = {

course:{

courses:mockCourses,

loading:false,

error:null

}

};
beforeEach(async()=>{

await TestBed.configureTestingModule({

imports:[

CourseListComponent

],

providers:[

provideMockStore({

initialState

})

]

}).compileComponents();
let store:MockStore;

beforeEach(()=>{

store=

TestBed.inject(

MockStore

);

});
});

});

function fail(arg0: string): void {
  throw new Error('Function not implemented.');
}
