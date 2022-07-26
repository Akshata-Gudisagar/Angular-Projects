import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
FirstName:String="Sales"
MiddalName:String="Order"
LastName:String="Management"

fullName():String{
  return this.FirstName+" "+this.MiddalName+" "+this.LastName
}
  constructor() { }

  ngOnInit(): void {
  }

}
