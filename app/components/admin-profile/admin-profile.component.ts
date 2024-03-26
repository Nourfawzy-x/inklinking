import { Component } from '@angular/core';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css',
  imports: [RouterModule, SideBarComponent, NavbarDashboardComponent],
})
export class AdminProfileComponent {}
