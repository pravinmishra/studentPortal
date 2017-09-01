import { Component,Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function validateTNC(c: FormControl) {
  let EXPRESSION = c.value != null && c.value != false;

  return EXPRESSION ? null : {
    validateTNC: {
      valid: false
    }
  };
}
@Directive({
  selector: '[validateTNC][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validateTNC, multi: true }
  ]
})
export class TNCValidator {}