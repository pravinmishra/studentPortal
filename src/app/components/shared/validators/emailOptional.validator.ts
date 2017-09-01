import { Component, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function validateEmailOptional(c: FormControl) {
  let EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if(c.value){
    return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmailOptional: {
        valid: false
        }
    };
  }else{
      return null;
  }
    
}
@Directive({
  selector: '[validateEmailOptional][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validateEmailOptional, multi: true }
  ]
})
export class EmailOptionalValidator {}