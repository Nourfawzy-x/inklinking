import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NavbarDashboardComponent,
    SideBarComponent,
  ],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @ViewChild('exampleModal') modal: ElementRef | undefined;

  constructor(private userService: UserService) {}

  users: any[] = [];
  toaster = inject(ToastrService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.users = res.data;
        console.log(this.users);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(userId: any) {
    this.userService.deleteUserById(userId).subscribe({
      next(value) {
        console.log(value);
      },
      complete: () => {
        this.toaster.success('The user deleted successfully', 'success');
        this.removeUserFromList(userId);
        if (this.modal) {
          const modalElement: any = this.modal.nativeElement;
          if (modalElement && modalElement.modal) {
            modalElement.modal('hide');
          }
        }
      },
    });
  }

  private removeUserFromList(userId: any): void {
    const index = this.users.findIndex((user) => user._id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
