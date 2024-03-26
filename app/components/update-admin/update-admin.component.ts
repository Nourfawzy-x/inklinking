import { Component } from '@angular/core';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-update-admin',
  standalone: true,
  imports: [NavbarDashboardComponent, SideBarComponent],
  templateUrl: './update-admin.component.html',
  styleUrl: './update-admin.component.css',
})
export class UpdateAdminComponent {}

// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   FormsModule,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// const passwordRegex =
//   /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]+$/;
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [ReactiveFormsModule, FormsModule, CommonModule, HttpClientModule],
//   providers: [AuthService], //for form
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent {
//   error: string = '';
//   isLoading: boolean = false;
//   constructor(private _AuthService: AuthService, private _router: Router) {}
//   registerForm = new FormGroup({
//     email: new FormControl('', [Validators.required, Validators.email]),
//     password: new FormControl('', [
//       Validators.required,
//       Validators.pattern(passwordRegex),
//     ]),
//   });
//   registerUser(registerForm: FormGroup) {
//     if (registerForm.invalid) {
//       return;
//     }
//     console.log(this.registerForm.value);
//     this.isLoading = true;
//     this._AuthService.signUp(this.registerForm.value).subscribe({
//       next: (response: any) => {
//         if (response.message === 'success') {
//           //login
//           this.isLoading = false;
//           this._router.navigate(['/home']);
//         } else {
//           this.error = response.message;
//           console.log(this.error);
//         }
//       },
//     });
//   }
//   getFormControl(controlName: string) {
//     //@ts-ignore
//     return this.registerForm.controls[controlName];
//   }
// }
