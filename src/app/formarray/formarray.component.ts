import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent  {


eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.eventForm = this.formBuilder.group({
   
      address: this.formBuilder.array([

      ]),
    });

  }

  get address(): FormArray {
    return this.eventForm.get("address") as FormArray
  }

  newAddress(): FormGroup {
    return this.formBuilder.group({
      address: ['', Validators.required],
      pincode: '',
    })
  }


  addAddress() {
    this.address.push(this.newAddress());
  }


  removeAddress(i: number) {
    this.address.removeAt(i);
  }

  onSubmit() {
    console.log(this.eventForm.value);
  }

}


export class Events {

  address: string;
  eventcode!: String;

  

  constructor( address: string) {
   
    this.address = address;
   

  }
}

