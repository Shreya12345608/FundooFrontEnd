import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  
  private updateNote = new BehaviorSubject([]);
  noteUpdated = this.updateNote.asObservable();
  
  noteUpdate(message:any) {
    console.log(" data service calling ",message);
    
    this.updateNote.next(message)
  }
}