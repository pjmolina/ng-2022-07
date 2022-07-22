import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BingoClientComponent } from './bingo/bingo-client.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PersonSearchPipe } from './pipes/person-search.pipe';
import { UserSortPipe } from './pipes/user-sort.pipe';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CurrencyPipe,
    PersonSearchPipe,
    UserSortPipe,
    HighlightDirective,
    PizzaListComponent,
    BingoClientComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // LoggerService    // bypass
    // { provide: LoggerService, useClass: LoggerV2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
