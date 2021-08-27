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
    this.cardUpdateForm =  this.formBuilder.group({
      title: this.data.title,
      description: this.data.description,
    })
  }
    
  updateNote(note: any) {
    let reqPayload = {
      NotesId: this.data.noteId,
      Title: this.cardUpdateForm.value.title,
      Description: this.cardUpdateForm.value.description
    }
    this.noteService.UpdateExistingNote('note').subscribe(response => {
      this.op = response;
      console.log(this.op.data);
      this.UpdateNote.emit(this.op.data);
      //this.GetAllNotes();
    })
  }
}
