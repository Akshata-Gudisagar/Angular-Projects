import { Component, OnInit } from '@angular/core';
import { Registration } from './registration';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrations:Registration;
  constructor() {
    this.registrations= new Registration();
   }

   Addform(registrationformData:any):void{

    console.log(registrationformData);

   }

}
