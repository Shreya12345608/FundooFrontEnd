import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  isClose:boolean= true;
  isOpen:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

}