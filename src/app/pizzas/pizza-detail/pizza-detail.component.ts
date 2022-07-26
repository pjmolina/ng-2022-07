import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pizza } from 'src/app/domain/pizza';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss'],
})
export class PizzaDetailComponent implements OnInit, OnDestroy {
  pizza?: Pizza;
  error = '';

  private sub?: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) {
    console.log('PizzaDetail construido');
  }

  ngOnInit(): void {
    console.log('PizzaDetail inicializado');

    this.sub = this.route.paramMap.subscribe((paramMap) => {
      console.log('PizzaDetail paramMap cambio', paramMap);
      const name = paramMap.get('pizzaName') || '';
      this.pizzaService.getPizzaByName(name).subscribe({
        next: (pizza) => {
          console.log('PizzaDetail tiene pizza', pizza);
          this.pizza = pizza;
          this.error = '';
        },
        error: (err) => {
          console.log('PizzaDetail tiene error', err);
          this.pizza = undefined;
          this.error = err;
        },
      });
    });
  }

  ngOnDestroy(): void {
    console.log('PizzaDetail destruido');

    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = undefined;
    }
  }

  volver(): void {
    // 1. limpieza de compo
    // 2. analica  -> inviocar servicios adicional
    // navegar

    void this.router.navigate(['/pizzas']);
  }
}
