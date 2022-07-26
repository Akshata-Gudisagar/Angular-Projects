import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {
  ProductDetails: Product[]

  constructor() {
    this.ProductDetails = [
      new Product("P001", "Bag", 5, 400),
      new Product("P002", "Watch", 1, 800),
      new Product("P003", "Book", 12, 900),
      new Product("P004", "Cake", 1, 1000)
    ]
      
  }

  ngOnInit(): void {
  }

}
