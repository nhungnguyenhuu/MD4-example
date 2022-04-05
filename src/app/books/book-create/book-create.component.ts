import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createFormBook: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {

  }
  createBook(){
    let data = this.createFormBook.value;
    this.bookService.createBook(data).subscribe(()=>{
      this.router.navigate(['books']);
      alert('Success!');
    }, ()=>{
      alert('errors');
    })
  }

}
