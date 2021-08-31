import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/Services/httpservices/http.service';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { DialogContentComponent } from '../../dialog-content/dialog-content.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  token: any;
  op: any
  iconVisible: any
  isTrash = true
  @Input() allNotes: any = []
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(private note: NotesService, private mate: MatDialog,public snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }
  openDialog(note: any) {
    let dialogRef = this.mate.open(DialogContentComponent, {
      width: '500px',
      data: note
    });
    dialogRef.afterClosed().subscribe()
  }
  deleteNote(note: any) {
    let data = {
      isTrash: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
      // this.GetAllNotes();
    })
  }
  //Call this function on trash icon u r done
  trashNote() {
    let reqPayload = {
     // NotesId: this.cardUpdateForm.value.notesId,
    }
    this.note.trashNote(reqPayload).subscribe((response:any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
  updateColor(id: any, color: string) {

    //Call this function on trash icon u r done
    let reqPayload = {
      // NoteId: this.colorpanel.value.NoteId,
      // color: this.colorpanel.value.notesId,

    }
    this.note.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
      this.snackBar.open("Note Updated Successfully.....", " ", { duration: 2000 });
    }, error => {
      console.log("error in register", error);
      this.snackBar.open("Updating Note fail.....", " ", { duration: 2000 });

    })
  }
  mouseEnter() {
    this.iconVisible = true;
  }

  mouseLeave() {
    this.iconVisible = false;
  }
}
