import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Chart1Component } from '../chart1/chart1.component';
import { Chart2Component } from '../chart2/chart2.component';
import { Chart3Component } from '../chart3/chart3.component';
import { SidebarComponent } from '../dash-board-profile/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SidebarComponent,
    Chart1Component,
    Chart2Component,
    Chart3Component,
    NavbarDashboardComponent,
    SideBarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
