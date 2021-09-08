import { Component, OnInit, Output, Input, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { GetAllArchiveComponent } from '../getAllArchive/get-all-archive/get-all-archive.component';
import { GetAllTrashComponent } from '../getAllTrash/get-all-trash/get-all-trash.component';
import { NotesComponent } from '../Notes/notes/notes.component';
import { CollaborationComponent } from '../collaboration/collaboration.component';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  colorpanel!: FormGroup;
  @Input() card: any;
  op: any
  Delete: any;
 // @Input() collab:any
  isNotesComponent: boolean = false;
  isTrashComponent: boolean = false;
  isArchiveComponent: boolean = false;
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(public noteService: NotesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder, private snackBar: MatSnackBar, private route: ActivatedRoute, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    let comp = this.route.snapshot.component;
    if (comp == NotesComponent) {
      this.isNotesComponent = true;
    }

    if (comp == GetAllTrashComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }
    if (comp == GetAllArchiveComponent) {
      this.isArchiveComponent = true;
      console.log(this.isArchiveComponent);
    }

    //console.log("card is inicon component", this.card);
  }

  updateColor(id: any, color: string) {
    console.log(id);
    if (id === undefined) {
      // this.onChangeColor.emit(color);
      console.log("Undeifined Card of color ", color);
    } else {

      console.log(id, color);

      let reqPayload = {
        NoteId: id,
        color: color
      }
      console.log(color);
      this.noteService.updateColor(reqPayload).subscribe((response: any) => {
        this.op = response.data;
        window.location.reload();
        this.UpdateNote.emit(this.op);
        this.snackBar.open('color changed succesfully', '', { duration: 2000 });
      }, error => {
        console.log('error ', error);
      })
    }
  }

  deleteNote(note: any) {
    console.log(note);
    this.noteService.deleteNote(note).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
  //Archive Note
  archiveNote() {
    console.log(this.card.noteId);
    let reqPayload = {
      NotesId: this.card.notesId,
    }
    this.noteService.archiveNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
  }
  //Trash Note
  trashNote(data: any) {
    console.log(this.card.noteId);
    console.log(data, '------');
    let reqPayload = {
      NotesId: this.card.notesId,
    }
    this.noteService.trashNote(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      window.location.reload();
      this.UpdateNote.emit(this.op);
    })
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
