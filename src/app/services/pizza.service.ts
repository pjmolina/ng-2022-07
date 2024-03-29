import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pizza } from '../domain/pizza';

const resource = '/pizzas';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  pizzaCache?: Pizza[] = undefined;
  cacheTs?: Date;

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    // if (this.cacheTs + 3600000 > new Date()) {
    //   this.pizzaCache = undefined;
    //   this.cacheTs = undefined;
    // }

    if (this.pizzaCache) {
      // acierto en cache. devolver cache
      return of(this.pizzaCache);
    }

    const url = environment.backendUrl + resource;
    return this.http.get<Pizza[]>(url).pipe(
      map((pizzas) =>
        pizzas.map((pizza) => fixPhoto(incrementaPrecio(pizza) as Pizza))
      ),
      map((pizzas) => {
        this.pizzaCache = pizzas; // actualizar la cache
        this.cacheTs = new Date();
        return pizzas;
      })
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

// export const incrementaPrecio = (pizza: Pizza): Pizza => {
//   const pizza2 = {
//     ...pizza,
//     price: pizza.price * 1.1,
//   };
//   return pizza2;
// };

export interface HasPrice {
  price: number;
}

export const incrementaPrecio = (
  obj1: HasPrice,
  percent: number = 1.1
): HasPrice => {
  const obj2 = {
    ...obj1,
    price: obj1.price * percent,
  };
  return obj2;
};

export function fixPhoto(pizza: Pizza): Pizza {
  if (pizza.photoUrl.startsWith('http')) {
    return pizza;
  }
  const sep = pizza.photoUrl.startsWith('/') ? '' : '/';

  pizza.photoUrl = `/assets/img/pizzas${sep}${pizza.photoUrl}`;
  return pizza;
}
