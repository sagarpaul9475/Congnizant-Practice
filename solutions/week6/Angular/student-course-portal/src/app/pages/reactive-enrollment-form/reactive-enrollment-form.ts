import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormArray } from '@angular/forms';

import { courseIdValidator } from '../../validators/course-id.validator';
import { emailTakenValidator } from '../../validators/email.validator';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    courseIdValidator,
    emailTakenValidator
  ],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    this.enrollForm = this.fb.group({

  studentName: [
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  ],

  studentEmail: [
    '',
    [Validators.required, Validators.email],
    [emailTakenValidator()]
  ],

  courseId: [
    null,
    [
      Validators.required,
      courseIdValidator()
    ]
  ],

  preferredSemester: [
    'Odd',
    Validators.required
  ],

  agreeToTerms: [
    false,
    Validators.requiredTrue
  ],

  selectedCourses: this.fb.array([])

});

  }
  get selectedCourses(): FormArray {

  return this.enrollForm.get('selectedCourses') as FormArray;

}
addCourse() {

  this.selectedCourses.push(

    this.fb.control('')

  );

}

removeCourse(index: number) {

  this.selectedCourses.removeAt(index);

}


  onSubmit() {

    console.log(this.enrollForm.value);

    console.log(this.enrollForm.getRawValue());

  }

}