import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../domain/pizza';

const resource = '/pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    const url = environment.backendUrl + resource;
    return this.http
      .get<Pizza[]>(url)
      .pipe(
        map((pizzas) =>
          pizzas.map((pizza) => fixPhoto(incrementaPrecio(pizza)))
        )
      );
  }
  getPizzaByName(name: string): Observable<Pizza> {
    return this.getPizzas().pipe(
      map((pizzas) => {
        const pizza = pizzas.find((p) => p.name === name);
        if (!pizza) {
          throw new Error('No encontre pizza con nombre ' + name);
        }
        return pizza;
      })
    );
  }
}

const incrementaPrecio = (pizza: Pizza): Pizza => {
  const pizza2 = {
    ...pizza,
    price: pizza.price * 1.1,
  };
  return pizza2;
};

function fixPhoto(pizza: Pizza): Pizza {
  if (pizza.photoUrl.startsWith('http')) {
    return pizza;
  }
  pizza.photoUrl = '/assets/img/pizzas' + pizza.photoUrl;
  return pizza;
}
