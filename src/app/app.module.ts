import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListbookComponent } from './model/listbook/listbook.component';
import { DetailComponent } from './model/detail/detail.component';
import { CreateComponent } from './model/create/create.component';
import { UpdateComponent } from './model/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListbookComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
