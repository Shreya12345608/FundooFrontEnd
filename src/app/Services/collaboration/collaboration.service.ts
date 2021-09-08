import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollaborationService {

  constructor(private http:HttpService) { }
  
  GetAllCollaboration(url: any) {
    return this.http.GetAllLabel(url);
  }
  CreateCollaboration(data: any) {
    return this.http.CreateLabel("Notes/CreateCollaboration", data);
  }

  DeleteCollaboration(data: any) {
    console.log(data)
    return this.http.DeleteLabel("Notes/RemoveColab?collabId=" + data);
  }
}
