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
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule,HighlightDirective,CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  constructor(
  private enrollmentService: EnrollmentService
) {}

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
 enroll() {

  if (this.enrollmentService.isEnrolled(this.course.id)) {

    this.enrollmentService.unenroll(this.course.id);

  } else {

    this.enrollmentService.enroll(this.course.id);

  }

  this.enrollRequested.emit(this.course.id);

}
}