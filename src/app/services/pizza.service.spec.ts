import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Pizza } from '../domain/pizza';

import { incrementaPrecio, PizzaService } from './pizza.service';

const httpMock = {
  get: (url: string): Observable<Pizza[]> => {
    return of([
      {
        id: 'A',
        name: 'Barbacoa',
        price: 8,
        currency: 'ETH',
        vegan: false,
        photoUrl: 'image.png',
      },
      {
        id: 'B',
        name: 'Cebolla',
        price: 7,
        currency: 'ETH',
        vegan: true,
        photoUrl: 'http://abc.com/cebolla.png',
      },
    ]);
  },
};

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpMock }],
    });
    service = TestBed.inject(PizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return pizzas when calling getPizzas()', (done) => {
    const obs$ = service.getPizzas();
    expect(obs$).toBeTruthy();

    obs$.subscribe({
      next: (pizzas) => {
        expect(pizzas.length).toEqual(2);
        expect(pizzas[0].name).toEqual('Barbacoa');
        expect(pizzas[0].price).toEqual(8.8);
        expect(pizzas[0].photoUrl).toEqual('/assets/img/pizzas/image.png');
        done();
      },
      error: (error) => {},
    });
  });
});

describe('incrementaPrecio', () => {
  it('should increment the price in 10%', () => {
    const pizza: Partial<Pizza> = {
      price: 100,
    };
    const pizza2 = incrementaPrecio(pizza as Pizza);

    expect(pizza2.price.toFixed(2)).toEqual('110.00');
  });
});
