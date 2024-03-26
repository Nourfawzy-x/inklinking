import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from '../../services/book.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    NavbarDashboardComponent,
    SideBarComponent,
  ],
  providers: [BookService],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  constructor(private bookService: BookService) {}
  @ViewChild('exampleModal') modal: ElementRef | undefined;

  books: any[] = [];
  toaster = inject(ToastrService);

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (res: any) => {
        this.books = res.data;
        console.log(this.books);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteBook(bookId: any) {
    this.bookService.deleteBookById(bookId).subscribe({
      next: () => {
        this.toaster.success('The book deleted successfully', 'success');
        console.log(bookId);

        this.removeBookFromList(bookId);
        if (this.modal) {
          const modalElement: any = this.modal.nativeElement;
          if (modalElement && modalElement.modal) {
            modalElement.modal('hide');
          }
        }
      },
      error: (err) => {
        console.error('Error deleting book:', err);
        // Handle error as needed
      },
    });
  }

  private removeBookFromList(bookId: any): void {
    console.log('Books before removal:', this.books);
    const index = this.books.findIndex((book) => book._id === bookId);
    console.log('Index to remove:', index);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log('Books after removal:', this.books);
    }
  }

  // deleteBook(bookId: any) {
  //   this.bookService.deleteBookById(bookId).subscribe({
  //     complete: () => {
  //       alert('Deleted successfully');
  //       this.removeUserFromList(bookId);
  //       if (this.modal) {
  //         const modalElement: any = this.modal.nativeElement;
  //         if (modalElement && modalElement.modal) {
  //           modalElement.modal('hide');
  //         }
  //       }
  //     },
  //   });
  // }

  // private removeUserFromList(bookId: any): void {
  //   const index = this.books.findIndex((book) => book._id === bookId);
  //   if (index !== -1) {
  //     this.books.splice(index, 1);
  //   }
  // }
}
