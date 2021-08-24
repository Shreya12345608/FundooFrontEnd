import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpService) { }
}
