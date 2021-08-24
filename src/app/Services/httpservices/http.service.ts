import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders}  from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
 
export class HttpService {
BaseUrl = environment.LOGIN_URL;
 https = new HttpHeaders();
  constructor( private http: HttpClient) { }


Post(url:any,data:any,token:any,headers:boolean){
  let options = {
    headers: new HttpHeaders({
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    })
  }
  // //connection with backend //https://localhost:44333/ api
  return this.http.post(this.BaseUrl + url, data,options);
}
Get(url:any,data:any,token:any,headers:boolean){
  //connection with backend 
  return this.http.get(this.BaseUrl + url);
}

Put(url:any,data:any,token:any,headers:boolean){
  let options = {
    headers: new HttpHeaders({
      'Authorization': "Bearer " + token,
      'Content-Type': 'application/json'
    })
  }
  //connection with backend 
  return this.http.put(this.BaseUrl + url, data,options);
}
Delete(){}
}








