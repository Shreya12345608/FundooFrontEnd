import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  BaseUrl = environment.LOGIN_URL;
  https = new HttpHeaders();


  constructor(private http: HttpClient) { }

  Post(url: any, data: any, token: any, headers: boolean) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    // //connection with backend //https://localhost:44333/ api
    return this.http.post(this.BaseUrl + url, data, options);
  }
  Get(url: any, data: any, token: any, headers: boolean) {
    //connection with backend 
    return this.http.get(this.BaseUrl + url);

  }

  Put(url: any, data: any, token: any, headers: boolean) {
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    //connection with backend 
    return this.http.put(this.BaseUrl + url, data, options);
  }



  AddUser(url: any, data: any, token: any, headers: boolean) {
    return this.http.post(this.BaseUrl + url, data);

  }

  // get all notes
  GetallNotes(url: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }



  // get all archive
  GetAllArchive(url: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }
  //get all trash
  GetAllTrash(url: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.get(this.BaseUrl + url, options);
  }

  //update notes
  UpdateNote(id: any) {
    console.log(id);
    const data = {
      title: id.Title,
      description: id.Description
    }
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.BaseUrl + 'Notes/updateNote?NotesId='+ id.NotesId, data, options);
  }
  //update notes
  TrashNote(id: any) {
    console.log(id);
    
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.BaseUrl + `Notes/${id.NotesId}/Trash`, options);
  }
  UpdateColor(data: any) {
    console.log(data);
    
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      })
    }
    return this.http.put(this.BaseUrl + 'Notes/updateNote?NotesId='+ data.NotesId + "8&color=" +data.color, options);
  }




  //delete note
  delete(id: any) {
    let token = localStorage.getItem('Token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }),
    }
    return this.http.delete(this.BaseUrl + 'Notes?notesId=' + id, options);
  }
}





































































































































































































































































































































































































































































































































































































































































































































