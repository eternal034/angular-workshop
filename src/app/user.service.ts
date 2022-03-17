import { Injectable } from '@angular/core';
//import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  isLoggedIn = false;
  constructor(/*private storage: StorageService*/) {
    //this.isLoggedIn = this.storage.getItem('isLogged')
  }

  login(): void {
    this.isLoggedIn = true;
    //this.storage.setItem('isLoggedIn' , true);
  }

  logout(): void {
    this.isLoggedIn = false;
    //this.storage.setItem('isLoggedIn', false);
  }
}
