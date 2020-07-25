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

  htmlstring = "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=20&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"
  toplisteord;
  toplisteord2;
  skurknamn;
  ord;
  ord2;
  rows = ['', ''];
  row2s = ['', ''];

  constructor(private topListWordsService: TopListWordsService) { }

  ngOnInit() {
    const supervillains = require('supervillains');
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
}
