import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name: string = '';
  email: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}
