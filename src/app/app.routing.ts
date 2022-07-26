import { Routes } from '@angular/router';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserPageComponent } from './user/user-page/user-page.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  // 1. carga desde el mismo modulo:
  // { path: 'bingo', component: BingoPageComponent },
  // 2. Carga perezosa (modulo distinto)
  {
    path: 'bingo',
    loadChildren: () =>
      import('./bingo/bingo.module').then((m) => m.BingoModule),
  },
  {
    path: 'pizzas',
    loadChildren: () =>
      import('./pizzas/pizza.module').then((m) => m.PizzaModule),
  },
  { path: 'chat', component: ChatPageComponent },
  { path: 'usuarios', component: UserPageComponent },

  { path: '**', component: NotFoundComponent },
];
