import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardComponent } from './course-card.component';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

describe('CourseCardComponent', () => {
  

  let component: CourseCardComponent;

  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        CourseCardComponent

      ]

    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);

    component = fixture.componentInstance;

  });
  it('should create', () => {

  expect(component).toBeTruthy();

});
it('should display course name', () => {

  component.course = {

    id: 1,

    name: 'Data Structures',

    code: 'CS101',

    credits: 4

  };

  fixture.detectChanges();

  const title = fixture.debugElement.query(

    By.css('h3')

  ).nativeElement;

  expect(title.textContent)

    .toContain('Data Structures');

});
it('should emit course id when enroll clicked', () => {

  component.course = {

    id: 5,

    name: 'Angular',

    code: 'ANG101',

    credits: 4

  };

  spyOn(

    component.enrollRequested,

    'emit'

  );

  fixture.detectChanges();

  const button = fixture.debugElement.query(

    By.css('button')

  );

  button.triggerEventHandler(

    'click',

    null

  );

  expect(

    component.enrollRequested.emit

  ).toHaveBeenCalledWith(5);

});
});
function spyOn(obj: any, methodName: string) {
  // Prefer global/jasmine spyOn if available
  const globalSpy = (globalThis as any).spyOn || (globalThis as any).Spy || undefined;
  if (typeof globalSpy === 'function') {
    return (globalThis as any).spyOn(obj, methodName);
  }

  // Fallback: replace the method with a simple spy function that records calls
  const calls: any[] = [];
  const spyFn = function(...args: any[]) {
    calls.push(args);
  } as any;
  spyFn.calls = {
    all: () => calls,
    any: () => calls.length > 0,
    count: () => calls.length,
    argsFor: (i: number) => calls[i]
  };
  obj[methodName] = spyFn;
  return spyFn;
}

