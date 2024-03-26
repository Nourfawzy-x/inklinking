import { HttpClientModule } from '@angular/common/http';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    SideBarComponent,
    NavbarDashboardComponent,
  ],
  providers: [BookService],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  bookId: any;
  book: any;

  // Initialize an empty Book object
  Book = {
    title: '',
    author: '',
    category: '',
    price: '',
    description: '',
    image: '',
  };

  toaster = inject(ToastrService);

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.bookId = params['id'];
    });

    this.bookService.getOneBook(this.bookId).subscribe({
      next: (res: any) => {
        this.book = res.data;
        console.log(res.data);

        this.Book = res.data;
        // Update the Book object with retrieved data
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  async onSubmit() {
    try {
      const formData = new FormData();
      formData.append('title', this.Book.title);
      formData.append('author', this.Book.author);
      formData.append('category', this.Book.category);
      formData.append('price', this.Book.price);
      formData.append('description', this.Book.description);
      formData.append('image', this.Book.image);

      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      // Open loading ..
      this.bookService.editBookById(this.bookId, formData).subscribe({
        next: (value) => {
          console.log(value);
          this.toaster.success('The book updated successfully', 'success');
          this.router.navigate(['/booklist']);
          // navigate
        },
        complete: () => {
          // Close loading
        },
      });
      // console.log('Product added successfully:', response);
      // this.router.navigate(['/booklist']);
    } catch (error) {
      console.log(error);
    }
  }

  onFileSelected(event: any) {
    this.Book.image = event.target.files[0];
    console.log(this.Book.image);
  }

  onCancel() {
    this.router.navigate(['/booklist']);
  }
}
