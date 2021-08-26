import { Component,Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/httpservices/http.service';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  token: any;
  isTrash = true
  @Input() allNotes: any = []
  constructor(private note: NotesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.GetAllNotes();
  }

  // GetAllNotes() {
  //   this.note.GetAllNotes('Notes').subscribe((response: any) => {
  //     console.log(response);
  //     this.noteArray = response.data;
  //     console.log(this.noteArray);

  //   }
  //   )
  // }

  deleteNote(note: any) {
    let data = {
      isTrash: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
     // this.GetAllNotes();
    })
  }
}
