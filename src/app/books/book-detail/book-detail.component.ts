import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book[];
  id = this.route.snapshot.paramMap.get('id');
  constructor(private bookService: BookService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.getByID(this.id);
  }

  getByID(id){
    this.bookService.getById(id).subscribe(book=>{
      this.book = book;
    
    });
  }
}
