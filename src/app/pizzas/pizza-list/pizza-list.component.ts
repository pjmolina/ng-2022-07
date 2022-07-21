import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/domain/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
})
export class PizzaListComponent implements OnInit, OnDestroy {
  pizzas: Pizza[] = [];
  sub?: Subscription;
  error = '';
  loading = false;

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    // API Sincrono que devuelve un array de pizza
    // this.pizzas = this.pizzaService.getPizzas();

    // Asincronia
    this.loading = true;
    this.sub = this.pizzaService.getPizzas().subscribe({
      next: (data) => {
        this.loading = false;
        this.pizzas = data;
        this.error = '';
      },
      error: (err) => {
        // console.error(err);
        this.loading = false;
        this.pizzas = [];
        this.error = 'No hay conectividad';
      },
      complete: () => {
        console.log('Se ha completado el observable');
      },
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }
}
