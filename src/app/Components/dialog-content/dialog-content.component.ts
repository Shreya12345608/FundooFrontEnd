import { Component, OnInit, Output, EventEmitter, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { DataservicesService } from 'src/app/Services/dataservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CollaborationComponent } from '../collaboration/collaboration.component';

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
  color: any
  Delete: any;
  @Input() collab:any
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private noteService: NotesService, private dataservice: DataservicesService,
    private snackBar: MatSnackBar, private route: ActivatedRoute, public dialog: MatDialog) {
    console.log(data);
    this.color = '#'.concat(data.color)
    console.log(this.color);
  }

  ngOnInit(): void {
    this.cardUpdateForm = this.formBuilder.group({
      notesId: this.data.notesId,
      title: this.data.title,
      // color: this.data.color,
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
      // this.op.reverse();
      // window.location.reload();
      //this.UpdateNote.emit(this.op);
      this.dataservice.sendMessage(this.op)
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
  openDialog(collab: any) {
    let diaLogRef = this.dialog.open(CollaborationComponent, {
      width: "700px",
      maxWidth: "auto",
      data: collab

    });
    console.log(collab);
    diaLogRef.afterClosed().subscribe()
  }
}