import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './model/listbook/listbook.component';
import { DetailComponent } from './model/detail/detail.component';
import { CreateComponent } from './model/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    DetailComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
