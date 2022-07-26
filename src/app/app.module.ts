import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { BingoClientComponent } from './bingo/bingo-client.component';
import { BingoPageComponent } from './bingo/bingo-page/bingo-page.component';
import { ChatClientComponent } from './chat/chat-client/chat-client.component';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PersonSearchPipe } from './pipes/person-search.pipe';
import { UserSortPipe } from './pipes/user-sort.pipe';
import { PizzaDetailComponent } from './pizzas/pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizzas/pizza-list/pizza-list.component';
import { PizzaPageComponent } from './pizzas/pizza-page/pizza-page.component';
import { UserPageComponent } from './user/user-page/user-page.component';
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
    ChatClientComponent,
    InicioComponent,
    BingoPageComponent,
    ChatPageComponent,
    UserPageComponent,
    NotFoundComponent,
    PizzaPageComponent,
    PizzaDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    // LoggerService    // bypass
    // { provide: LoggerService, useClass: LoggerV2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
