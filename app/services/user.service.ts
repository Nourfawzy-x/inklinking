import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}
  private URL_user = 'http://localhost:3000/admin/users';
  getUsers() {
    return this._httpClient.get(this.URL_user);
  }

  getOneUser(id: any) {
    return this._httpClient.get(this.URL_user + '/' + id);
  }

  deleteUserById(id: any) {
    return this._httpClient.delete(this.URL_user + '/' + id);
  }

  editUserById(id: any, updatedUserData: any) {
    return this._httpClient.put(this.URL_user + '/' + id, updatedUserData);
  }
}
