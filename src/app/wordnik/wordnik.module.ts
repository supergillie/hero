import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordnikComponent } from './wordnik.component';

@NgModule({
  imports: [CommonModule],
  exports: [WordnikComponent],
  declarations: [WordnikComponent],
})
export class WordnikModule {

  
  testvariabel = "FUNKAR";

 }
