import { Injectable } from '@angular/core';
import { HttpService } from '../httpservices/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpService) { }
  //login user  http service
  loginUser(data: any) {
    //console.log("given data is", data)
    return this.http.Post('Fundoo', data, null, false);
  }
  //register user http service
  registerUser(data: any) {
    console.log("given data is", data);
    return this.http.Post('Fundoo/register', data, null, false);
  }
}

