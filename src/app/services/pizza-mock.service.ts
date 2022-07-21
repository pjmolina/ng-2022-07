import { Injectable } from '@angular/core';
import { Pizza } from '../domain/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaMockService {
  private pizzas = [
    {
      id: 'A',
      name: 'Margarita',
      price: 8,
      currency: 'EUR',
      vegan: false,
    },
    {
      id: 'B',
      name: 'Con piña pero sin queso',
      price: 9,
      currency: 'EUR',
      vegan: true,
    },
    {
      id: 'C',
      name: 'Barbacoa especial',
      price: 12,
      currency: 'EUR',
      vegan: false,
    },
  ];

  constructor() {}

  getPizzas(): Pizza[] {
    return this.pizzas;
  }
  getById(id: string): Pizza | undefined {
    const pizza = this.pizzas.find((p) => p.id === id);
    return pizza;
  }

  create(pizza: Pizza): void {
    this.pizzas.push(pizza);
  }
  update(pizza: Pizza): void {
    let found = this.pizzas.find((p) => p.id === pizza.id);
    if (found) {
      found = { ...found, ...pizza };
    } else {
      throw new Error('Not found');
    }
  }
  delete(pizza: Pizza): void {
    const index = this.pizzas.findIndex((p) => p.id === pizza.id);
    if (index === -1) {
      throw new Error('Not found');
    } else {
      this.pizzas.splice(index, 1); // removeAtIndex ()
    }
  }
}
