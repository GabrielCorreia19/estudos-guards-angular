import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  doLogin() {
    localStorage.setItem('token', 'aaaaaaaa');
  }

  doLogout() {
    localStorage.clear();
  }
}
