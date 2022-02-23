import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleLoginClick() {
    this.authService.saveUserToStorage(this.email);
    if (this.authService.authUser()) {
      this.router.navigate(['/leagues']);
    } else {
      alert('Wrong email. To login type: danny');
    }
  }
}
