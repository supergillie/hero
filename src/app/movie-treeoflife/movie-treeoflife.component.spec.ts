import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTreeoflifeComponent } from './movie-treeoflife.component';

describe('MovieTreeoflifeComponent', () => {
  let component: MovieTreeoflifeComponent;
  let fixture: ComponentFixture<MovieTreeoflifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTreeoflifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTreeoflifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
