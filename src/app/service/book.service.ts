import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ibook} from "../ibook";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url_Api= "http://localhost:3000/books";
  books:Array<Ibook> = [];

  constructor(private httpClient:HttpClient) { }


  getAllBook():Observable<Ibook[]>{
    return this.httpClient.get<Ibook[]>(this.url_Api)
  }


  createBook(book:Ibook){
    return this.httpClient.post(this.url_Api,book)
  }

  getBookById(id:number):Observable<Ibook>{
    return this.httpClient.get<Ibook>(this.url_Api+'/'+id);
  }

  updateBook(id:number,book:Ibook):Observable<Ibook>{
    return this.httpClient.put<Ibook>(this.url_Api+'/'+id,book);

  }

  deleteBook(id:number){
    return this.httpClient.delete<Ibook>(this.url_Api+'/'+id);

  }



}
