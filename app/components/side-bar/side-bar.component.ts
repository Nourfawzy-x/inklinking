import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  providers: [AuthService],
  imports: [LogoComponent, RouterModule, HttpClientModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(private authService: AuthService) {}
  logOut() {
    this.authService.signOut();
  }
}
