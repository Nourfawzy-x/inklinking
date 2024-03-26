import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
const fullNameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [AuthService], //for form
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: any = '';
  isLoading: boolean = false;

  constructor(private userService: AuthService, private _Router: Router) {
    localStorage.removeItem('userToken');
    this.registerForm = new FormGroup(
      {
        fullName: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(fullNameRegex),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(passwordRegex),
          Validators.minLength(8),
        ]),
        passwordConfirm: new FormControl('', [
          Validators.required,
          Validators.pattern(passwordRegex),
        ]),
      },
      { validators: this.passwordMatchValidator }
    );
  }
  get fullNameControl() {
    return this.registerForm.get('fullName');
  }
  get emailControl() {
    return this.registerForm.get('email');
  }

  get passwordControl() {
    return this.registerForm.get('password');
  }
  get confirmPasswordControl() {
    return this.registerForm.get('passwordConfirm');
  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value ===
      control.get('passwordConfirm')?.value
      ? null
      : { misMatch: true };
  }
  registerUser(registerForm: FormGroup) {
    this.isLoading = true;
    this.userService.signUp(registerForm.value).subscribe({
      next: (response: any) => {
        this.isLoading = false;
        console.log(response);
        if (response.status === 'success') {
          this._Router.navigate(['/login']);
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = err.error.message.Message;
        console.error('HTTP Error:', err.error.message.Message);
      },
    });
  }
}
// error: string = '';
// isLoading: boolean = false;
// constructor(private _AuthService: AuthService, private _router: Router) {}
// registerForm = new FormGroup(
//   {
//     fullName: new FormControl('', [
//       Validators.required,
//       Validators.minLength(3),
//       Validators.maxLength(20),
//       Validators.pattern(fullNameRegex),
//     ]),

//     email: new FormControl('', [Validators.required, Validators.email]),
//     imageInput: new FormControl('', [Validators.required]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.pattern(passwordRegex),
//     ]),
//     confirmPassword: new FormControl('', [
//       Validators.required,
//       Validators.pattern(passwordRegex),
//     ]),
//   },
//   {
//     validators: this.passwordMatchValidator,
//   }
// );
// passwordMatchValidator(control: AbstractControl) {
//   return this.control.get('password')?.value ===
//     this.control.get('confirmPassword')?.value
//     ? null
//     : { misMatch: true };
// }
// registerUser(registerForm: FormGroup) {
//   if (registerForm.invalid) {
//     return;
//   }
//   console.log(this.registerForm.value);
//   this.isLoading = true;
//   this._AuthService.signUp(this.registerForm.value).subscribe({
//     next: (response: any) => {
//       if (response.message === 'success') {
//         //login
//         this.isLoading = false;
//         this._router.navigate(['/home']);
//       }
//     },
//   });
// }
// getFormControl(controlName: string) {
//   //@ts-ignore
//   return this.registerForm.controls[controlName];
// }
