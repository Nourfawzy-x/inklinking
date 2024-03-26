import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-most-viewd',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [BookService],
  templateUrl: './most-viewd.component.html',
  styleUrl: './most-viewd.component.css',
})
export class MostViewdComponent implements OnInit {
  constructor(private bookservice: BookService) {}
  Books: any;
  ngOnInit(): void {
    //console.log(this.bookservice.getAllBooks())

    this.bookservice.getBooks().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.Books = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
