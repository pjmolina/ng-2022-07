import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BingoClientComponent } from './bingo-client.component';
import { BingoPageComponent } from './bingo-page/bingo-page.component';
import { routes } from './bingo.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [BingoPageComponent, BingoClientComponent],
  bootstrap: [BingoPageComponent],
})
export class BingoModule {}
