import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {

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

 enroll() {
  this.isEnrolled = true;
  this.enrollRequested.emit(this.course.id);
}
}