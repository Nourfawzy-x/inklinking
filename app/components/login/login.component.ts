import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  LoginForm: FormGroup;
  error: any = '';
  isLoading: boolean = false;

  toastr = inject(ToastrService);

  constructor(private userService: AuthService, private _Router: Router) {
    localStorage.removeItem('userToken');
    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(passwordRegex),
        Validators.minLength(8),
      ]),
    });
  }
  get emailControl() {
    return this.LoginForm.get('email');
  }
  get passwordControl() {
    return this.LoginForm.get('password');
  }
  LoginUser(LoginForm: FormGroup) {
    this.isLoading = true;
    this.userService.signIn(LoginForm.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        console.log(response);
        if (response.status === 'success') {
          localStorage.setItem('userToken', response.token);
          this.userService.saveUserData();
          if (this.userService.userData.getValue().role === 'user') {
            this.toastr.success('Login success', 'success');
            this._Router.navigate(['/home']);
          } else if (this.userService.userData.getValue().role === 'admin') {
            this.toastr.success('Login success', 'success');
            this._Router.navigate(['/dashboard']);
          }
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err.error.message.Message;
        console.error('HTTP Error:', err.error.message.Message);
        console.log('ghalt');
      },
    });
  }
}
