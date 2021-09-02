import { Component, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  isMoreOpen = false;
  pin: boolean = false;
  isCreated = false;
  isReminder = false;
  isArchive = false;
  Color: any;
  isTrash = false;
  //@Output() createNoteRefersh = new EventEmitter;
  click() {
    this.isOpen = true;
  }
  constructor(public note: NotesService, private activeRoute: ActivatedRoute, public snackBar: MatSnackBar) { }
  @Output() createNoteRefersh = new EventEmitter<string>();

  ngOnInit(): void {
    // this.token = this.activeRoute.snapshot.paramMap.get('token');

  }
  receivecolor($event:any) {
    console.log(" event in ");
    this.Color = $event
  }

  addNote() {
    
    let data = {
      title: this.title,
      description: this.description,
      isArchive: this.isArchive,
      color: this.Color,
      isPin: true,
      isTrash: this.isTrash
    }
    this.token = localStorage.getItem('Token');
    console.log(" add note data ", data);
    if (this.title && this.description) {
      this.note.createNote(this.token, data).subscribe((response) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);
        this.createNoteRefersh.emit(message);
        this.title = "";
        this.description = "";
        this.snackBar.open("Note Created Successfully.....", " ", { duration: 2000 });
        this.fullEdit = false;
       // window.location.reload();
      }, error => {
        console.log("error in register", error);
        this.snackBar.open("Creating Note fail.....", " ", { duration: 2000 });
        this.fullEdit = false;

      })
    } else {
      this.fullEdit = false;
    }
  }
  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }
  
 
}