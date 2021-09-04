import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpService) {
  }

  GetAllLabel(url: any) {
    return this.http.GetAllLabel(url);
  }
  CreateLabel(data: any) {
    return this.http.CreateLabel("Notes/CreateLabel", data);
  }

  DeleteLabel(data:any){
    return this.http.DeleteLabel("Notes/"+data+"/Label");
  }
}

