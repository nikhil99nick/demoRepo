import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule ,
  MatStepperModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule
  //MatMomentDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    NavbarComponent,
    UsersComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,MatExpansionModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule,MatMenuModule,    FormsModule,
    ReactiveFormsModule,MatAutocompleteModule,MatCheckboxModule,MatDatepickerModule,MatNativeDateModule

  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
