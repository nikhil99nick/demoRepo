import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RouteDemo';
}
