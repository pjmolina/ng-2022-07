import { Routes } from '@angular/router';
import { BingoClientComponent } from './bingo-client.component';
import { BingoPageComponent } from './bingo-page/bingo-page.component';

export const routes: Routes = [
  {
    path: '',
    component: BingoPageComponent,
  },
  {
    path: 'client',
    component: BingoClientComponent,
  },
];
