import { Component, OnInit } from '@angular/core';
import { TopListWordsService } from './../top-list-words.service';
import { ResourceLoader } from '../../../node_modules/@angular/compiler';

declare var require: any;

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  heroName1; heroName2; heroName3; heroName4; heroName5;
  titelord1; titelord2; titelord3; titelord4;

  toplisteord;
  toplisteord2;
  skurknamn;
  ord;
  ord2;
  rows = ['', ''];
  row2s = ['', ''];

  constructor(private topListWordsService: TopListWordsService) { }

  ngOnInit() {

      this.ord = this.topListWordsService.getOdessaWords(1);
      this.titelord2 = this.ord[1]
      this.titelord1 = "Odessa"
      this.toplisteord = this.topListWordsService.getOdessaWords(50);

      for (var i = 0; i < 5; i++) {
        this.rows[i] = this.toplisteord[i]
          + ' ' + this.toplisteord[20 + i]
          + ' ' + this.toplisteord[21 + i]
          + ' ' + this.toplisteord[22 + i];
      }
    };
  }
