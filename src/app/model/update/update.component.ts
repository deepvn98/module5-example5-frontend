import { Component, OnInit } from '@angular/core';
import {Ibook} from "../../ibook";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id:any;
  message='';
  book:Ibook={
    id:0,
    title:'',
    author:'',
    description:''
  }

  constructor( private booksv:BookService,
               private activeRouter:ActivatedRoute,
               ) {
    this.activeRouter.paramMap.subscribe((paraMap:ParamMap)=>{
      this.id = paraMap.get('id');
    })
  }

  ngOnInit(): void {
  }

  update(){
    this.booksv.updateBook(this.id,this.book).subscribe(()=>{
      this.message = "Thành Công";
    })


  }

}
