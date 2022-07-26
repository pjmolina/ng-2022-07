import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoPageComponent } from './bingo-page.component';

describe('BingoPageComponent', () => {
  let component: BingoPageComponent;
  let fixture: ComponentFixture<BingoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
