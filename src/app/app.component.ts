import { Component } from '@angular/core';
//import { supervillains } from 'supervillains';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  heroName1;
  heroName2;
  heroName3;
  heroName4;
  heroName5;



  ngOnInit(){
    const supervillains = require('supervillains');
    this.heroName1 = supervillains.random();
    this.heroName2 = supervillains.random(); 
    this.heroName3 = supervillains.random(); 
    this.heroName4 = supervillains.random(); 
    this.heroName5 = supervillains.random();  
  }
}
