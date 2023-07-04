import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { SavingAccountsComponent } from './saving-accounts/saving-accounts.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CurrencyExchangeComponent,
    SavingAccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    CurrencyExchangeComponent,
    SavingAccountsComponent
  ],
  providers: [],
})
export class Modules { }
