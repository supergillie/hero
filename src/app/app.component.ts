import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroName1;  heroName2;  heroName3;  heroName4;  heroName5;
  myData = ['apa', 'beta', 'kalle'];
  htmlstring =  "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=1&maxLength=-1&limit=20&api_key=1e76922a1e9f2542dc0050e7c5903f8c3f52c1c2f5c4d1f5c"

  ngOnInit(){
    const supervillains = require('supervillains');
    this.heroName1 = supervillains.random();
    this.heroName2 = supervillains.random(); 
    this.heroName3 = supervillains.random(); 
    this.heroName4 = supervillains.random(); 
    this.heroName5 = supervillains.random();  

    // this.myData = this.httpClient.get(this.htmlstring);
    //this.customersObservable = this.httpClient
    //.get<Customer[]>("127.0.0.1:3000/customers")
    //.do(console.log);

    //then(function(response) {
    //    this.myData = response.data;
    };
    
  
}
