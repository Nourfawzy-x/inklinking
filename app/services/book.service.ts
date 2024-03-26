import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  URL_book = 'http://localhost:3000/admin/books';

  constructor(private _httpClient: HttpClient) {}

  getBooks() {
    return this._httpClient.get(this.URL_book);
  }

  getOneBook(id: any) {
    return this._httpClient.get(this.URL_book + '/' + id);
  }

  addNewBook(bookData: any) {
    return this._httpClient.post(this.URL_book, bookData);
  }

  deleteBookById(id: any) {
    return this._httpClient.delete(this.URL_book + '/' + id);
  }

  editBookById(id: any, updatedBookData: any) {
    return this._httpClient.put(this.URL_book + '/' + id, updatedBookData);
  }
}
