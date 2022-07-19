import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { PersonSearchPipe } from './pipes/person-search.pipe';
import { UserComponent } from './user/user.component';
import { UserSortPipe } from './pipes/user-sort.pipe';

@NgModule({
  declarations: [AppComponent, UserComponent, CurrencyPipe, PersonSearchPipe, UserSortPipe],
  imports: [BrowserModule, FormsModule],
  providers: [
    // LoggerService    // bypass
    // { provide: LoggerService, useClass: LoggerV2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
