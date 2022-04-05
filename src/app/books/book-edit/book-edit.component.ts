import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  updateBookForm: FormGroup;
  constructor(private bookService: BookService,
              private route:ActivatedRoute,
              private router: Router) {
                this.route.paramMap.subscribe((paramMap: ParamMap) => {
                  this.id = +paramMap.get('id');
                  this.getById(this.id);
                });
               }

  ngOnInit() {

  }
  getById(id){
    return this.bookService.getById(id).subscribe(book=>{
      this.updateBookForm = new FormGroup({
        title : new FormControl(book.title),
        author : new FormControl(book.author),
        description : new FormControl(book.description),
      })
    });

  }

  updateBook(id){
    let data = this.updateBookForm.value;
    this.bookService.edit(id, data ).subscribe(()=>{
      this.router.navigate(['books']);
      alert('update success');
    }, ()=>{
      alert('update failed!!');
    })
  }

}
