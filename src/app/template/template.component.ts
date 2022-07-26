import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from './register';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  events : Register;
  Events : string[];

  constructor() { 
    this.Events =["Coding","Quize","Cultural","IndoorGames"];
    this.events =new Register();
  }

  ngOnInit(): void {
  }
  addRegister() : void{
    console.log(JSON.stringify(this.events))
  }
}
