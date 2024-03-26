import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    NavbarDashboardComponent,
    SideBarComponent,
  ],
  providers: [UserService],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  userId: any;
  user: any;
  formData = new FormData();
  imagePreview: string | undefined;

  toaster = inject(ToastrService);

  User = {
    fullName: '',
    email: '',
    gender: '',
    phone: '',
    status: '',
    role: '',
    image: '',
  };

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });

    this.userService.getOneUser(this.userId).subscribe({
      next: (res: any) => {
        this.user = res.data;
        console.log(res.data);
        this.User = res.data;
        console.log(this.user);
        this.imagePreview = this.user.image;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async onSubmit() {
    try {
      this.formData.append('fullName', this.User.fullName);
      this.formData.append('email', this.User.email);
      this.formData.append('role', this.User.role);
      this.formData.append('gender', this.User.gender);
      this.formData.append('status', this.User.status);
      this.formData.append('phone', this.User.phone);
      this.formData.append('image', this.User.image);

      this.formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Open loading ..
      this.userService.editUserById(this.userId, this.formData).subscribe({
        next: (value) => {
          console.log(value);
          this.imagePreview = this.user.image;
          this.router.navigate(['/userlist']);
          this.toaster.success('The user updated successfully', 'success');
          // navigate
        },
        complete: () => {
          // Close loading
        },
      });
      // console.log('Product added successfully:', response);
      // this.router.navigate(['/booklist']);
    } catch (error) {
      console.log(error);
    }
  }

  // getImage() {
  //   console.log(this.User.image);
  //   if (!this.User.image) {
  //     return `http://localhost:3000/usersImgs/default.jpg`;
  //   } else {
  //     return `http://localhost:3000/usersImgs/${this.User.image}`;
  //   }
  // }

  getImagePlaceholder(): string {
    if (this.imagePreview) {
      return this.imagePreview.startsWith('data:image')
        ? this.imagePreview
        : `http://localhost:3000/usersImgs/${this.imagePreview}`;
    } else {
      return 'http://placehold.it/180';
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    // this.formData.append('fullName', this.User.fullName);
    // this.formData.append('email', this.User.email);
    // this.formData.append('role', this.User.role);
    // this.formData.append('gender', this.User.gender);
    // this.formData.append('status', this.User.status);
    // this.formData.append('phone', this.User.phone);
    this.formData.append('image', file);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  onCancel() {
    this.router.navigate(['/userlist']);
  }
}
