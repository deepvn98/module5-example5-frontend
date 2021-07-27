import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Ibook} from "../../ibook";

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.scss']
})
export class ListbookComponent implements OnInit {

  books: Ibook[] = [];

  constructor(private book: BookService) {
    this.book.getAllBook().subscribe((list:Ibook[])=>{
      this.books = list
    });


  }

  ngOnInit(): void {


  }

  deleteBook(id:number){
    this.book.deleteBook(id).subscribe(()=>{
      this.book.getAllBook().subscribe((list:Ibook[])=>{
        this.books = list
      });
    })
  }

}
