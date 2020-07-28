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
  counter=0;
  heroName1; heroName2; heroName3; heroName4; heroName5;
  titelord1; titelord2; titelord3; titelord4;

  toplisteord;
  toplisteord2;
  skurknamn;
  ord;
  ord2;
  rows = ['', ''];
  row2s = ['', ''];
//  private commonUrl: string= 'http://localhost:4200';
  private commonUrl: string= '';

  getBackground() {
     return {'background-image': `url(${this.commonUrl}/assets/img/odessa.jpg)`};

  }

  constructor(private topListWordsService: TopListWordsService) { }

refresh(): void {

    this.newLyr();
    console.log("hej");
}

 isEven(n) {
   return n % 2 == 0;
}

newLyr(){
   this.counter++;
     this.ord = this.topListWordsService.getOdessaWords(1);

      this.titelord2 = this.ord[1]
      this.titelord1 = "Odessa"

      if(this.isEven(this.counter)){
        this.titelord2 = "Odessa"
        this.titelord1 = this.ord[1]
}




this.toplisteord = "";
      this.toplisteord = this.topListWordsService.getOdessaWords(50);
      console.log("nu skapas en ny text.")
      console.log("första ordet är "+this.toplisteord)

      for (var i = 0; i < 12; i++) {
        this.rows[i] = this.toplisteord[i]
          + ' ' + this.toplisteord[20 + i]
          + ' ' + this.toplisteord[21 + i]
          + ' ' + this.toplisteord[22 + i];
      }
}

  ngOnInit() {
      this.newLyr();
    };
  }
