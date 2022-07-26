import { Component, OnInit } from '@angular/core';
import { Employee } from '../parent-child2/employee';
import { FormsModule } from '@angular/forms';
import { Participant } from './participant';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
  participants:Participant[];
  participantId!:string;
  constructor() {
    this.participants=[
      new Participant("CS01","Angular 6 Training","belgaum"),
      new Participant("CS02","Reat JS Training","belagaum"),
      new Participant("CS03","Spring frame work","pune"),
      new Participant("CS04","RPA","benglore"),
    ];
   }
   onParticipantSelected(participant:Participant):void{
    this.participantId = participant.participantId;
    console.log(this.participantId);
}
  ngOnInit(): void {
  }

}
