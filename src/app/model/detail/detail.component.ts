import { Component, OnInit } from '@angular/core';
import {Ibook} from "../../ibook";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id:any;
  book:Ibook={
    id:0,
    title:'',
    author:'',
    description:''
  };
  constructor(private router:Router,
              private booksv:BookService,
              private activeRouter:ActivatedRoute) {
    this.activeRouter.paramMap.subscribe((paraMap:ParamMap)=>{
      this.id = paraMap.get('id');
    })
  }

  ngOnInit(): void {
    this.getBookById(this.id);
  }
  getBookById(id:number){
    this.booksv.getBookById(id).subscribe((book)=>{
      this.book = book
    })
  }

}
