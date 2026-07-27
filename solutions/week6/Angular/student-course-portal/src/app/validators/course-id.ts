import { AbstractControl, ValidationErrors } from '@angular/forms';

export function courseIdValidator(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value === null || value === '') {
    return null; // Let the required validator handle empty values
  }

  return value >= 100
    ? null
    : { invalidCourseId: true };
}