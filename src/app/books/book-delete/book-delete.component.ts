import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');;
  constructor(private bookService:BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.bookService.getById(this.id);
    this.deletebook();
  }
  deletebook(){
    // console.log(this.id);

    this.bookService.deleteBookById(this.id).subscribe(()=>{
      this.router.navigate(['books']);
      alert("Xoa Thanh cong")
    }, ()=>{
      alert("Xay ra loi")
    })
  }
}
