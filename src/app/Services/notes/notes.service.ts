import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) {}

    //get all notes  http service
    //login user  http service
    getNotes(data: any) {
      console.log("given data is", data);
      return this.http.Post('Fundoo', data, null, false);
    }
  }
