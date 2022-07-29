import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { BingoClientComponent } from './bingo-client.component';
import { BingoService } from './bingo.service';

const bingoMock: Partial<BingoService> = {};

describe('BingoClientComponent', () => {
  let component: BingoClientComponent;
  let fixture: ComponentFixture<BingoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BingoClientComponent],
      providers: [{ provide: BingoService, userVale: bingoMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(BingoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render initial state', () => {
    expect(component.dentro).toBeFalse();

    const de = fixture.debugElement;
    const b = de.query(By.css('button'));
    const b1 = b.nativeElement;
    expect(b1.textContent).toEqual('Entrar');
  });
  it('should render Salir when inside bingo', () => {
    expect(component.dentro).toBeFalse();

    component.entrar();

    fixture.detectChanges();

    expect(component.dentro).toBeTrue();
    const de = fixture.debugElement;
    const b = de.query(By.css('button'));
    const b1 = b.nativeElement;
    expect(b1.textContent).toEqual('Salir');
  });
});
