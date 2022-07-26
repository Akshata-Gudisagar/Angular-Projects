import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-parent-child2',
  templateUrl: './parent-child2.component.html',
  styleUrls: ['./parent-child2.component.css']
})
export class ParentChild2Component implements OnInit {
  partiregister:Employee[];
  @Input()
  participantId:string='';
  constructor() {
    this.partiregister=[
      new Employee("Anand Takur","anand.takur@gmail.com","CS01"),
      new Employee("Sumathi Manochanran","sumathis.manochanran@gmail.com","CS01"),
      new Employee("kishir kumar","kishor.kumar@gmail.com","CS01"),
      new Employee("Ajay varma","Ajay.varma@gmail.com","CS01"),
      new Employee("Anand Takur","anand.takur@gmail.com","CS02"),
      new Employee("Sumathi Manochanran","sumathis.manochanran@gmail.com","CS02"),
      new Employee("kishir kumar","kishor.kumar@gmail.com","CS02"),
      new Employee("Ajay varma","Ajay.varma@gmail.com","CS02"),
      new Employee("Sumathi Manochanran","sumathis.manochanran@gmail.com","CS03"),
      new Employee("kishir kumar","kishor.kumar@gmail.com","CS03"),
      new Employee("Ajay varma","Ajay.varma@gmail.com","CS03"),
      new Employee("Anand Takur","anand.takur@gmail.com","CS03"),
      new Employee("Sumathi Manochanran","sumathis.manochanran@gmail.com","CS04"),
      new Employee("kishir kumar","kishor.kumar@gmail.com","CS04"),
      new Employee("Ajay varma","Ajay.varma@gmail.com","CS04"),
      new Employee("Anand Takur","anand.takur@gmail.com","CS04"),
    ];
   }

  ngOnInit(): void {
  }

}
