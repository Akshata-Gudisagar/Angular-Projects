import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products : Product[];
  selectedCategory : string = "stationary";
  categories : string[];
  constructor() {
    this.categories = ["stationary", "Bevarages"];
    this.products = [
      new Product("P001","bag",8,800,"stationary","mahesh"),
      new Product("P002","pen",5,100,"stationary","raj"),
      new Product("P003","Watch",2,800,"stationary","ram"),
      new Product("P004","Cake",1,1000,"Bevarages","iyengar"),
      new Product("P005","pepsi",12,900,"Bevarages","steven"),
      new Product("P006","pen",2,100,"stationary","reynolds"),
    ];
   }

  ngOnInit(): void {
  }

}
