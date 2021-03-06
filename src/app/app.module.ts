import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
//import { WordnikModule } from './wordnik/wordnik.module';
import { WordnikComponent } from './wordnik/wordnik.component';

import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MovieTreeoflifeComponent } from './movie-treeoflife/movie-treeoflife.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    WordnikComponent,
    MovieTreeoflifeComponent
  ],
  imports: [
  //  WordnikModule,
    BrowserModule,
    AppRoutingModule,
  //  WordnikModule,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
