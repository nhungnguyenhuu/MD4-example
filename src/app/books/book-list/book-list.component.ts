import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  listBook: Book[] = [];
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.getAll();
  }


  getAll(){
    this.bookService.getAll().subscribe(listBook=>{
      this.listBook = listBook;
    });
  }

}
