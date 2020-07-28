import { Component, OnInit } from '@angular/core';
import { TopListWordsService } from './../top-list-words.service';
import { ResourceLoader } from '../../../node_modules/@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from "rxjs";

declare var require: any;

@Component({
  selector: 'app-wordnik',
  templateUrl: './wordnik.component.html',
  styleUrls: ['./wordnik.component.css'],
})

export class WordnikComponent implements OnInit {
  heroName1; heroName2; heroName3; heroName4; heroName5;
  titelord1;
  titelord2;
  titelord3;
  titelord4;

  mydata;

  htmlstring = "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=20&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"
  toplisteord;
  toplisteord2;
  skurknamn;
  ord;
  ord2;
  testContent: string;

  rows = ['', ''];
  row2s = ['', ''];


  constructor( private topListWordsService: TopListWordsService, private http:HttpClient) {
    this.getJson().subscribe(jsonStr => this.testContent = jsonStr, error => this.handleError<string>(error, "Network Error!"));
  }

  ngOnInit() {


    this.mydata = this.http.get(this.htmlstring);
    console.log("this.mydata");
    console.log(this.mydata);


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


  //  this.http.get(this.htmlstring);




    console.log("this.mydata");
    console.log(this.mydata);

    //this.customersObservable = this.httpClient
    //.get<Customer[]>("127.0.0.1:3000/customers")
    //.do(console.log);

    //then(function(response) {
    //    this.myData = response.data;
  };

//
//https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=20&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"
//


  getJson(): Observable<string> {
    return this.http
      .get("https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=20&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c")
      .pipe(
      map((res: any) => {
        console.log("Data got: ");
        console.log(res);
        return res;
      })
      //,
      //catchError(error => this.handleError<string>(error, "Network Error!"))
    );
  }

  private handleError<T>(error: any, result?: T) {
        console.log("This is getting error:")
        console.log(error);
      //  return of(result as T);
  }

//https://github.com/tfalkowski/wordnikApp/blob/master/app/words/wordService.ts
//https://stackblitz.com/edit/angular-read-local-file?file=src%2Fapp%2Fapp.component.ts
}
