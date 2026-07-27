import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailTakenValidator(): AsyncValidatorFn {

  return (control: AbstractControl): Observable<ValidationErrors | null> => {

    const blockedEmails = [
      'admin@test.com',
      'student@test.com'
    ];

    return of(blockedEmails.includes(control.value)).pipe(

      delay(1000),

      map(isTaken => isTaken ? { emailTaken: true } : null)

    );

  };

}