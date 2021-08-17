import { Injectable } from '@angular/core';
import {HttpService} from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpService) { }
loginUser(data: any){
  console.log("given data is", data)
  return this.http.Post('Fundoo', data, null, false);
}
}

