import { Routes } from '@angular/router';
import { BingoPageComponent } from './bingo/bingo-page/bingo-page.component';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PizzaPageComponent } from './pizzas/pizza-page/pizza-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'bingo', component: BingoPageComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'usuarios', component: UserPageComponent },
  { path: 'pizzas', component: PizzaPageComponent },
  { path: 'pizzas/:pizzaName', component: PizzaDetailComponent },
  { path: '**', component: NotFoundComponent },
];
