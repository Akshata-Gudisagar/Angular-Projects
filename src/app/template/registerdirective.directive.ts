import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { provideRoutes } from '@angular/router';
// import { provideRoutes } from '@angular/router';

@Directive({
  selector: '[appRegisterdirective]',
  providers :[{
    provide: NG_VALIDATORS,
    useExisting : RegisterdirectiveDirective,
    multi :true

  }]
})
export class RegisterdirectiveDirective {

  constructor() { }

}
