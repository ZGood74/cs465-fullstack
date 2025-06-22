import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public email = '';
  public password = '';
  public error = '';

  constructor(private authService: AuthService, private router: Router) {}

  public login(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token); //  Save token
        this.router.navigate(['/']); //  Navigate to home or wherever
      },
      error: (err) => this.error = err.error?.message || 'Login failed'
    });
  }
}
