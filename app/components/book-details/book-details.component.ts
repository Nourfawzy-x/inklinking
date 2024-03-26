import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    NavbarDashboardComponent,
    DashboardComponent,
    SideBarComponent,
  ],
  providers: [BookService],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css',
})
export class BookDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  book: any;
  bookId: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
    });

    this.bookService.getOneBook(this.bookId).subscribe({
      next: (res: any) => {
        this.book = res.data;
        console.log(this.book);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
