import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent, UserComponent, CurrencyPipe],
  imports: [BrowserModule, FormsModule],
  providers: [
    // LoggerService    // bypass
    // { provide: LoggerService, useClass: LoggerV2Service },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
