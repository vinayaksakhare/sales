import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;  

  constructor(private http:Http) { }

  registerUser(user) {
    let headers =  new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.baseUrl+'users/register', user, {headers: headers})
      .map(res => res.json());      
  }

  authenticateUser(user) {
    let headers =  new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post(environment.baseUrl+'users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

   getProfile() {
    let headers =  new Headers();
    this.loadToken();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.baseUrl+'users/profile', {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user) {
    this.user = user;
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired();
  }

  bdmRole() {
    let role = JSON.parse(localStorage.getItem('user')).role;
    if(role === 'bdm') {
      return true;
    } else {
      return false;
    }

  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
