import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
  cardUpdateForm!: FormGroup;
  op: any
  pin: boolean = false;
  @Output() UpdateNote = new EventEmitter<any>();
  notesArray: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NotesService
  ) { }

  ngOnInit(): void {
    this.cardUpdateForm = this.formBuilder.group({
      notesId: this.data.notesId,
      title: this.data.title,
      color: this.data.color,
      description: this.data.description
    })
  }
  updateNote(data: any) {
    let reqPayload = {
      NotesId: this.cardUpdateForm.value.notesId,
      Title: this.cardUpdateForm.value.title,
      Description: this.cardUpdateForm.value.description
    }
    //new trash function rhega like  UpdateExistingNote usme sirf note id pass krna  "NotesId: this.cardUpdateForm.value.notesId"
    this.noteService.UpdateExistingNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })

  }

  refreshNotes(value: any) {
    console.log(value);
    // this.UpdateNote();
  }

  updateColor(id: any, color: string) {
    let reqPayload = {
      NoteId: id,
      color: color
    }
    console.log(reqPayload);
    this.noteService.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      console.log(this.op);
      window.location.reload();
      //this.updateColor.emit(this.op);
    })
  }
  // get all notes
  GetAllNotes() {
    this.noteService.GetAllNotes('Notes').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);

    }
    )
  }
  //Trash Note
  trashNote(data: any) {
    console.log(data, '------');
    let reqPayload = {
      NotesId: this.cardUpdateForm.value.notesId,
    }
    this.noteService.trashNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
  //Archive Note
  archiveNote() {
    let reqPayload = {
      NotesId: this.cardUpdateForm.value.notesId,
    }
    this.noteService.archiveNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
  togglePin() {
    this.pin = !this.pin;
  }
}