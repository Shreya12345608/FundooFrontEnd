import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseUrl = environment.LOGIN_URL;
  constructor( private http: HttpClient) { }


Post(url:any,data:any,token:any,headers:boolean){
  //print data and url
  console.log(data,url);
  //connection with backend //https://localhost:44333/ api
  return this.http.post(this.BaseUrl + url, data);
}
Get(url:any,data:any,token:any,headers:boolean){
  console.log(data,url);
  //connection with backend 
  return this.http.get(this.BaseUrl + url);
}
Put(){}
Delete(){}
}








