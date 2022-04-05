import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/books');
  }

  public getById(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/books/' + id );
  }

  createBook(data): Observable<any>{
    return this.http.post<any>('http://localhost:3000/books', data);
  }

  public deleteBookById(id : number) : Observable<Book> {
    return this.http.delete<Book>(`http://localhost:3000/books/`+ id);
  }
  public edit(id, data): Observable<any>{
    return this.http.put<any>('http://localhost:3000/books/'+ id, data);
  }
}
