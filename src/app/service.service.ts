import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:4201/user/login';

  constructor(private http: HttpClient) { }
  // private http = Inject(HttpClient);

  // a login method...
  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    // // send data to the backend api using post method...
    var result = this.http.post(this.apiUrl, body, {headers});
    console.log(result);

    // return result;

    if (username == 'abdul' && password == 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }
}
