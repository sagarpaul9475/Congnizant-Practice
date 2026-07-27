import {
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {

  @Input() course: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed:', changes);
  }

}