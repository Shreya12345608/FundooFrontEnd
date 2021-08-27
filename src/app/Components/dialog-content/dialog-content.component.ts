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
  @Output() UpdateNote = new EventEmitter<any>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NotesService
  ) { }

  ngOnInit(): void {
   this.cardUpdateForm = this.formBuilder.group({
    notesId: this.data.notesId,
      title: this.data.title,
      description: this.data.description
    })
  }
  updateNote(data:any) {
    let reqPayload = {
      NotesId: this.cardUpdateForm.value.notesId,
      Title: this.cardUpdateForm.value.title,
      Description: this.cardUpdateForm.value.description
    }
    //new trash function rhega like  UpdateExistingNote usme sirf note id pass krna  "NotesId: this.cardUpdateForm.value.notesId"
    this.noteService.UpdateExistingNote(reqPayload).subscribe((response:any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
//Call this function on trash icon u r done
  trashNote() {
    let reqPayload = {
      NotesId: this.cardUpdateForm.value.notesId,
    }
    this.noteService.trashNote(reqPayload).subscribe((response:any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
}