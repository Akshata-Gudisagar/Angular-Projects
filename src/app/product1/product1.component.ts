import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  productArray: Product[];

  minPrice : number = 1.0;
  maxPrice : number = 1000.0;
  constructor() { 
    this.productArray=[

      
      new Product("p01", "pen", 50, 100, "stationary", "nataraj "),
      new Product("p02", "pencile", 10, 100, "stationary", "nataraj "),
      new Product("p03","eraser",5,100,"stationary","nataraj "),
      new Product("p04","pepsi",35,100,"beverages","stavin"),
      new Product("p05","coke",35,100,"beverages","staivn")

   ];

  }

  ngOnInit(): void {
  }

}
