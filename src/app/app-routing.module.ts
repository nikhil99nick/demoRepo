import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import {UsersComponent } from './users/users.component'
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  { path: 'filter', component : FilterComponent },
  { path: 'users', component : UsersComponent },
  { path: 'navbar', component : NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
