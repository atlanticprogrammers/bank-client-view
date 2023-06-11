import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { SideNavService } from './side-nav.service';
import { LayoutsComponent } from './layouts.component';
import { BrowserModule } from '@angular/platform-browser';
import { Modules } from '../modules/modules.module';
// import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';

@NgModule({
    declarations: [
      HeaderComponent,
      DrawerComponent,
      LayoutsComponent,
      // CurrencyExchangeComponent
    ],
    imports: [
      BrowserModule, 
      MatToolbarModule,
      MatSidenavModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      Modules
    ],
    exports: [
      HeaderComponent,
      DrawerComponent,
      LayoutsComponent,
      // CurrencyExchangeComponent
    ],
    providers:[
      SideNavService,
    ]
  })
  export class LayoutsModule { }
  