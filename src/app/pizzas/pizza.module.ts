import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { PizzaPageComponent } from './pizza-page/pizza-page.component';

const pizzaRoutes: Routes = [
  { path: '', component: PizzaPageComponent },
  { path: ':pizzaName', component: PizzaDetailComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pizzaRoutes)],
  declarations: [PizzaDetailComponent, PizzaListComponent, PizzaPageComponent],
  bootstrap: [PizzaPageComponent],
})
export class PizzaModule {}
