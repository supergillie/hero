import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordnikComponent } from './wordnik.component';

describe('WordnikComponent', () => {
  let component: WordnikComponent;
  let fixture: ComponentFixture<WordnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
