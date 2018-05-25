import {EventEmitter, Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  // sendItem = new EventEmitter<object[]>();
  sendItem:Array<object>;
  
  constructor() { }
}
