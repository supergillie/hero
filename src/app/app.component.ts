import { Component } from '@angular/core';
import { TopListWordsService } from './top-list-words.service';
import { ResourceLoader } from '../../node_modules/@angular/compiler';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroName1; heroName2; heroName3; heroName4; heroName5;
  titelord1;
  titelord2;
  titelord3;
  titelord4;

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
    this.ord = this.topListWordsService.getWords(1);
    this.titelord1 = this.ord[1]
    this.titelord2 = supervillains.random();
    this.toplisteord = this.topListWordsService.getWords(50);

    for (var i = 0; i < 5; i++) {
      this.rows[i] = this.toplisteord[i]
        + ' ' + supervillains.random()
        + ' ' + this.toplisteord[20 + i]
        + ' ' + supervillains.random();
    }
    this.ord2 = this.topListWordsService.getWords(1);
    this.titelord3 = this.ord[2];
    this.titelord4 = supervillains.random();

    for (var i = 0; i < 5; i++) {
      this.row2s[i] = this.toplisteord[20 + i]
        + ' ' + supervillains.random()
        + ' ' + this.toplisteord[40 + i]
        + ' ' + supervillains.random();
    }


    // this.myData = this.httpClient.get(this.htmlstring);
    //this.customersObservable = this.httpClient
    //.get<Customer[]>("127.0.0.1:3000/customers")
    //.do(console.log);

    //then(function(response) {
    //    this.myData = response.data;
  };


}
