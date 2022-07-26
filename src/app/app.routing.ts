import { Routes } from '@angular/router';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { MayorDeEdadGuard } from './guards/mayor-de-edad.guard';
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
    canActivate: [MayorDeEdadGuard],
    canLoad: [MayorDeEdadGuard],
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
