import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/Services/httpservices/http.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
}
