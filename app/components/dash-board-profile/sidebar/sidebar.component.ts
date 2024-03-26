import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  constructor(private userprofile: UserService) {}
  admin: any;
  ngOnInit(): void {
    this.userprofile.getUsers().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.admin = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
