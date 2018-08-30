import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { WordnikModule } from './wordnik/wordnik.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WordnikModule,
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
