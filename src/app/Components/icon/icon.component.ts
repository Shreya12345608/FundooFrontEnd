import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from 'src/app/Services/notes/notes.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  colorpanel!: FormGroup;

  op: any
  @Output() UpdateNote = new EventEmitter<any>();
  constructor(public noteService: NotesService, @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.colorpanel = this.formBuilder.group({
      notesId: this.data.notesId,
      color: this.data.color
    })
  } updateColor(id: any, color: string) {

    //Call this function on trash icon u r done
    let reqPayload = {
      NoteId: this.colorpanel.value.NoteId,
      color: this.colorpanel.value.notesId,

    }
    this.noteService.updateColor(reqPayload).subscribe((response: any) => {
      this.op = response.data;
      this.UpdateNote.emit(this.op);
    })
  }
}
