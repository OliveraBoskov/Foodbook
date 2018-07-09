import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { RecepieComponent } from './components/recepie/recepie.component';
import { RecepieAddComponent } from './components/recepie/recepie-add/recepie-add.component';
import { HomeCompoenent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RecepieService } from './core/services/recepie.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const COMPONETS = [
  HeaderComponent,
  HomeCompoenent,
  RecepieComponent,
  RecepieAddComponent
];

@NgModule({
  declarations: [
    AppComponent,
    COMPONETS
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule
  ],
  providers: [
    RecepieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
