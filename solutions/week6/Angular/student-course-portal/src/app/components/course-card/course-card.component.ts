import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight.directives';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { EnrollmentService } from '../../services/enrollment.service';
import { Store } from '@ngrx/store';

import {

Observable

} from 'rxjs';

import {

selectEnrolledIds

} from '../../store/enrollment/enrollment.selectors';

import {

enrollInCourse,

unenrollFromCourse

} from '../../store/enrollment/enrollment.actions';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,HighlightDirective,CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  enrolledIds$!:Observable<number[]>;
  constructor(
  private enrollmentService: EnrollmentService,
  private store:Store
) {
this.enrolledIds$=

this.store.select(

selectEnrolledIds

);
}

  @Input() course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
  };

  @Output() enrollRequested = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes);
  }
  isExpanded = false;

isEnrolled = false;

toggleDetails() {
  this.isExpanded = !this.isExpanded;
}



// Getter keeps the template cleaner
get cardClasses() {
  return {
    'card--enrolled': this.isEnrolled,
    'card--full': this.course.credits >= 4,
    'expanded': this.isExpanded
  };
}
get enrolled(): boolean {

  return this.enrollmentService.isEnrolled(this.course.id);

}
enroll(){

this.store.dispatch(

enrollInCourse({

courseId:this.course.id

})

);

}
unenroll(){

this.store.dispatch(

unenrollFromCourse({

courseId:this.course.id

})

);

}
}