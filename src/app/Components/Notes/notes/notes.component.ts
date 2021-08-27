import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/httpservices/http.service';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { DialogContentComponent } from '../../dialog-content/dialog-content.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  token: any;
  iconVisible: any
    isTrash = true
  @Input() allNotes: any = []
  constructor(private note: NotesService, private mate: MatDialog) { }

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
  mouseEnter() {
    console.log("mouse enter");
    this.iconVisible = true;
  }
  
  mouseLeave() {
    console.log("mouse leave");
    this.iconVisible = false;
  }
}
