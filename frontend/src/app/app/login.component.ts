import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <input type="text" [(ngModel)]="username" placeholder="Username">
      <input type="password" [(ngModel)]="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  `
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(): void {
    this.http.post<LoginResponse>('http://localhost:3000/login', { username: this.username, password: this.password })
      .subscribe((response: LoginResponse) => {
        console.log(response);
        // Almacenar el token de sesión en el session storage
        sessionStorage.setItem('token', response.token);
      }, (error: any) => {
        console.error(error);
        // Manejar el error
      });
  }
}