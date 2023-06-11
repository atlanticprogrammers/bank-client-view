import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyExchangeComponent } from './modules/currency-exchange/currency-exchange.component';
import { LayoutsComponent } from './layouts/layouts.component';

const routes: Routes = [
  {
    path: 'currency-exchange', component: LayoutsComponent
  },
  {
    path: '', component: LayoutsComponent
  },
  {
    path: 'currency-exchange', component: CurrencyExchangeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
