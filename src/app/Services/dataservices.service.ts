import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {
  private messageSource = new BehaviorSubject([]);
  recievedMessage = this.messageSource.asObservable();
  constructor() { }

  sendMessage(message: any) {
    this.messageSource.next(message);
  }
}