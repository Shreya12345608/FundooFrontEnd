import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  // isClose: boolean = true;
  // isOpen: boolean = false;
  title = ''
  description = ''
  isOpen = true;
  token: any;
  click() {
    this.isOpen = true;
  }
  constructor(private note: NotesService,private activeRoute: ActivatedRoute) { }
 // @Output() messageEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.token = this.activeRoute.snapshot.paramMap.get('token');

  }


  addNote() {
    let data = {
      title: this.title,
      description: this.description
    }
    console.log(" add note data ", data);

    this.note.createNote(this.token,data).subscribe((response) => {
      console.log(response);
      let message = "note created successfull";
      //this.messageEvent.emit(message);
    })

  }
}