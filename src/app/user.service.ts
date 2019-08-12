import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  state = 0;
  constructor() {
    console.log('created user service');
  }
}
