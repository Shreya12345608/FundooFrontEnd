import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }

  //get all notes
  getNotes(data: any) {
    console.log("given data is", data);
    return this.http.Post('Notes', data, null, false);
  }
  createNote(token:any,data: any) {
    return this.http.Post('Notes', data,  token, true)

  }
}
