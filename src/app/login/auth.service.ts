import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(username: string, password: string) {

    console.log(username);
    console.log(password);

    // const authUrl = 'http://localhost:3000/publicAPI/rh/authenticate/login';
    // let headers: HttpHeaders = new HttpHeaders();
    //
    // headers.append('Content-Type', 'application/json');

    const options = {
      responseType: 'json'
    };
    // const httpBody = JSON.stringify({
    //   username: username.toString(),
    //   password: password.toString()
    // });
    const myUser: User = new User();
    myUser.username = username;
    myUser.password = password;
    console.log(JSON.stringify(myUser));
    console.log('log username: ' + myUser.username);

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
