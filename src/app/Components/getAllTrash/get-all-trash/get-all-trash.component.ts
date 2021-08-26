import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
@Component({
  selector: 'app-get-all-trash',
  templateUrl: './get-all-trash.component.html',
  styleUrls: ['./get-all-trash.component.scss']
})
export class GetAllTrashComponent implements OnInit {
  notesArray: any = [];
  isTrash = true

  constructor(private note: NotesService) { }


  ngOnInit(): void {
    this.GetAllTrash();
  }

  GetAllTrash() {
    this.note.getAllTrash('Notes/trash').subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);

    }
    )
  }
  deleteNote(note: any) {
    let data = {
     // isTrash: this.isTrash
    }
    this.note.deleteNote(note).subscribe(data => {
      console.log(data);
      this.GetAllTrash();
    })
  }
}