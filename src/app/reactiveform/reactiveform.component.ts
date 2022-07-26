import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  registrationForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder) { 
  this.registrationForm=this.createForm();
}



createForm():FormGroup{
  return this.formBuilder.group({
    'FirstName':['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern('^[a-zA-Z\S]{6,12}$')])],
    'LastName':['',Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern('^[a-zA-Z\S]{6,12}$')])],
    'MobileNo':['',Validators.compose([Validators.required,Validators.pattern('^[0-9]{10}$')])],
    'Email':['',Validators.compose([Validators.required,Validators.pattern('^[^]+@[^]+\.[a-z]{2,3}$')])],
    'Password':['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(20),Validators.pattern('^[a-zA-Z\S]{8,20}$')])]
    
  });
}
addUser() : void {
  console.log(JSON.stringify(this.registrationForm.value));
}


}
