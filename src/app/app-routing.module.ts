import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListbookComponent} from "./model/listbook/listbook.component";
import {DetailComponent} from "./model/detail/detail.component";
import {CreateComponent} from "./model/create/create.component";
import {UpdateComponent} from "./model/update/update.component";
import {DeleteComponent} from "./model/delete/delete.component";

const routes: Routes = [
  { path:'',component:ListbookComponent},
  { path:'list',component:ListbookComponent},
  { path:'detail/:id',component:DetailComponent},
  { path:'create',component:CreateComponent},
  { path:'update/:id',component:UpdateComponent},
  { path:'delete/:id',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
