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
    if (this.authService.login(this.username, this.password)) {
      this.loginMessage = 'Login Successful!';
      this.username = '';
      this.password = '';
    }
    else {
      this.loginMessage = 'Invalid username or password.';
    }
  }
}
