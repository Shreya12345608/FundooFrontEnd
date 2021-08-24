import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  constructor(private note: NotesService) { }

  ngOnInit(): void {
  }

  GetAllNotes() {
    this.note.getNotes('Notes').subscribe((response) => { console.log(response)}
    )}
  }
