import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/domain/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    // API Sincrono que devuelve un array de pizza
    // this.pizzas = this.pizzaService.getPizzas();

    // Asincronia
    this.pizzaService.getPizzas().subscribe({
      next: (data) => {
        this.pizzas = data;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('Se ha completado el observable');
      },
    });
  }
}
