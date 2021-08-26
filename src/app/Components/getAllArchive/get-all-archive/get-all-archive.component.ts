import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/Services/notes/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-archive',
  templateUrl: './get-all-archive.component.html',
  styleUrls: ['./get-all-archive.component.scss']
})
export class GetAllArchiveComponent implements OnInit {
   notesArray: any = [];
  isTrash = true
  constructor(private notes: NotesService,private activeroute :ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllArchive();

  }
  GetAllArchive() {
    this.notes.GetAllNotes('Notes/archive').subscribe((response : any) => {
      console.log(response);
      this.notesArray = response.data;
      this.notesArray.reverse();
      console.log(this.notesArray);
    });
    
  }
  deleteNote(note: any) {
    let data = {
      isTrash: this.isTrash
    }
    this.notes.deleteNote(note).subscribe(data => {
      console.log(data);
      this.GetAllArchive();
    })
  }
}