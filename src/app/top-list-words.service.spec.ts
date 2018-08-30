import { TestBed, inject } from '@angular/core/testing';

import { TopListWordsService } from './top-list-words.service';
import { WritePropExpr } from '../../node_modules/@angular/compiler';

describe('TopListWordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopListWordsService]
    });
  });

  it('should be created', inject([TopListWordsService], (service: TopListWordsService) => {
    expect(service).toBeTruthy();
  }));

  it('getWord ska ge korrekt svar', inject([TopListWordsService], (service: TopListWordsService) => {
    svarlista = service.getWords(3)
    expect(svarlista.length = 3);
    
  }));

});
