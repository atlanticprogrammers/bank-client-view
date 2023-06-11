import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { SavingAccountsComponent } from './saving-accounts/saving-accounts.component';

@NgModule({
  declarations: [
    CurrencyExchangeComponent,
    SavingAccountsComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    CurrencyExchangeComponent,
    SavingAccountsComponent
  ],
  providers: [],
})
export class Modules { }
