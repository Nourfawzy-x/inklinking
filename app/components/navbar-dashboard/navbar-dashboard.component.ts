import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-navbar-dashboard',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './navbar-dashboard.component.html',
  styleUrl: './navbar-dashboard.component.css',
})
export class NavbarDashboardComponent {}
