import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Ibook} from "../../ibook";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  message:String='';

  book:Ibook={
    id:0,
    title:'',
    author:'',
    description:''
  }

  constructor(private booksv:BookService) {


  }

  ngOnInit(): void {
  }

  createBook(){
    this.booksv.createBook(this.book).subscribe(()=>{
      this.message = 'Thêm Mới Thành Công!'
    })
  }

}
