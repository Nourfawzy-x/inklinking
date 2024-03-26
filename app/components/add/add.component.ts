import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavbarDashboardComponent } from '../navbar-dashboard/navbar-dashboard.component';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SideBarComponent,
    NavbarDashboardComponent,
  ],
  providers: [BookService],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  Book = {
    title: '',
    author: '',
    category: '',
    price: '',
    description: '',
    image: '',
  };

  toaster = inject(ToastrService);
  constructor(private bookService: BookService, private router: Router) {}

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

      console.log(formData);

      console.log('API URL:', this.bookService.URL_book);

      // Open loading ..
      this.bookService.addNewBook(formData).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['/booklist']);
          this.toaster.success('The book added successfully', 'success');
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
