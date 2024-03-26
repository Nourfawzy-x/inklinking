import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MostViewdComponent } from '../most-viewd/most-viewd.component';
import { CirclesComponent } from '../circles/circles.component';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [AuthService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    MostViewdComponent,
    CirclesComponent,
    HttpClientModule,
    CommonModule,
  ],
})
export class HomeComponent {
  isLogin: boolean = false;
  constructor(
    private authService: AuthService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit(): void {
    this.authService.userData.subscribe({
      next: () => {
        if (this.authService.userData.getValue() != null) {
          this.isLogin = true;
          console.log('true');
        } else {
          this.isLogin = false;
          console.log('false');
        }
      },
    });
  }
  logOut() {
    this.authService.signOut();
  }

  flag = 0;
  next() {
    const c1Element = this.el.nativeElement.querySelector('.c1');
    const c2Element = this.el.nativeElement.querySelector('.c2');
    const c3Element = this.el.nativeElement.querySelector('.c3');
    const c4Element = this.el.nativeElement.querySelector('.c4');
    const c5Element = this.el.nativeElement.querySelector('.c5');

    if (this.flag == 0) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '0');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 1) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '0');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '99');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 2) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '0');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 3) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '99');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '0');
      this.flag++;
    } else if (this.flag == 4) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '99');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '0');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag = 0;
    }
  }

  prev() {
    const c1Element = this.el.nativeElement.querySelector('.c1');
    const c2Element = this.el.nativeElement.querySelector('.c2');
    const c3Element = this.el.nativeElement.querySelector('.c3');
    const c4Element = this.el.nativeElement.querySelector('.c4');
    const c5Element = this.el.nativeElement.querySelector('.c5');

    if (this.flag == 0) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '0');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 1) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '0');
      this.flag++;
    } else if (this.flag == 2) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '0');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 3) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '0');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '9');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag++;
    } else if (this.flag == 4) {
      this.renderer.setStyle(
        c1Element,
        'transform',
        'translateX(0px) scale(1.5)'
      );
      this.renderer.setStyle(c1Element, 'z-index', '9');

      this.renderer.setStyle(
        c2Element,
        'transform',
        'translateX(-300px) scale(1.3)'
      );
      this.renderer.setStyle(c2Element, 'z-index', '9');

      this.renderer.setStyle(
        c4Element,
        'transform',
        'translateX(-500px) scale(1)'
      );
      this.renderer.setStyle(c4Element, 'z-index', '0');

      this.renderer.setStyle(
        c5Element,
        'transform',
        'translateX(500px) scale(1)'
      );
      this.renderer.setStyle(c5Element, 'z-index', '9');

      this.renderer.setStyle(
        c3Element,
        'transform',
        'translateX(300px) scale(1.3)'
      );
      this.renderer.setStyle(c3Element, 'z-index', '9');
      this.flag = 0;
    }
  }
}
