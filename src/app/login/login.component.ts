import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private authService: ServiceService) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.loginMessage = "Login Successful!";
        console.log('Login successful:', response);
      },
      error => {
        this.loginMessage = "Username or Password invalid...";
        console.error('Login failed:', error);
      }
    );
  }
}
