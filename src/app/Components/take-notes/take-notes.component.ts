import { Component, OnInit , Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  title = ''
  description = ''
  isOpen = true;
  token: any;
  fullEdit: boolean = false;

  pin: boolean = false;

  isReminder = false;
  isArchive = false;
  isPin = false;
  isTrash = false;
  //@Output() createNoteRefersh = new EventEmitter;
  click() {
    this.isOpen = true;
  }
  constructor(private note: NotesService, private activeRoute: ActivatedRoute) { }
   @Output() createNoteRefersh = new EventEmitter<string>();

  ngOnInit(): void {
    // this.token = this.activeRoute.snapshot.paramMap.get('token');

  }


  addNote() {
    let data = {
      title: this.title,
      description: this.description,
      isArchive: this.isArchive,
      isPin: this.isPin,
      isTrash: this.isTrash
    }
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", data);

    this.note.createNote(this.token, data).subscribe((response) => {
      console.log(response);
      let message = "note created successfull";
      console.log(message);
      this.createNoteRefersh.emit(message);
    })

  }
  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }
}