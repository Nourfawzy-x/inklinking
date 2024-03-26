import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _httpClient: HttpClient, private _router: Router) {
    if (localStorage.getItem('userToken') != null) {
      this.saveUserData();
    }
  }
  userData: any = new BehaviorSubject(null);
  private auth_url = 'http://localhost:3000/signup';
  private login_url = 'http://localhost:3000/login';

  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken: object = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    localStorage.setItem('userRole', this.userData.getValue().role);
    localStorage.setItem('userImage', this.userData.getValue().image);
    console.log(this.userData.getValue());
  }
  signOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._router.navigate(['/login']);
  }

  signUp(userData: object) {
    return this._httpClient.post(this.auth_url, userData);
  }
  signIn(userData: object) {
    return this._httpClient.post(this.login_url, userData);
  }
}
