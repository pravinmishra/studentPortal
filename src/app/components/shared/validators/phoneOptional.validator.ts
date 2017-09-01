import { Component, Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

function validatePhoneOptional(c: FormControl) {
  let PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if(c.value){
    return PHONE_REGEXP.test(c.value) ? null : {
        validatePhoneOptional: {
        valid: false
        }
    };
  }else{
      return null;
  }
    
}
@Directive({
  selector: '[validatePhoneOptional][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useValue: validatePhoneOptional, multi: true }
  ]
})
export class PhoneOptionalValidator {}