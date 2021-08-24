import { Component,Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {
    token: any;
  @Input() noteArray: any = []
  constructor(private note: NotesService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.GetAllNotes();
  }

  // GetAllNotes() {
  //   this.note.GetAllNotes('Notes').subscribe((response:any) => {
  //     console.log(response);
  //     this.noteArray = response.data;
  //     console.log(this.noteArray);
      
  //   }
  //   )
  }