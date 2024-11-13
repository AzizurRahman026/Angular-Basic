import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:4201';

  constructor(private http: HttpClient) { }
  // private http = Inject(HttpClient);

  // a login method...
  // login(username: string, password: string) {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = { username, password };

  //   // // send data to the backend api using post method...
  //   var result = this.http.post(this.apiUrl, body, {headers});
  //   console.log(result);

  //   // return result;

  //   if (username == 'abdul' && password == 'password') {
  //     localStorage.setItem('isLoggedIn', 'true');
  //     return true;
  //   }
  //   return false;
  // }

  // home page data retrive:
  home(): Observable<any> {
    console.log("Service layer home method()...");
    return this.http.get<any>(this.apiUrl);
  }
  


  // Method to call backend login API
  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, password };

    return this.http.post<any>(`${this.apiUrl}/user/login`, body, { headers });
  }
}
