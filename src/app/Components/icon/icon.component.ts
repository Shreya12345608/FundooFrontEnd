import { Component, OnInit, Output,Input, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  colorpanel!: FormGroup;
  @Input() card: any;

  op: any
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(public noteService: NotesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {

  } updateColor(id: any, color: string) {

    console.log(id, color);

    let reqPayload = {
      NoteId: id,
      color: color
    }
    console.log(color);
    this.noteService.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
  deleteNote(note: any) {
    console.log(note);
    this.noteService.deleteNote(note).subscribe(data => {
      window.location.reload()
    })
  }
   //Archive Note
   archiveNote() {
    let reqPayload = {
      NotesId: this.card.notesId,
    }
    this.noteService.archiveNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
}
