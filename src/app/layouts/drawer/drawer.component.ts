import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavService } from '../side-nav.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ModuleName } from './drawer.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public isCurrencyExchange = true;
  public isSavingAccounts = false;
  public moduleName = ModuleName;

  constructor(private sideNavService: SideNavService, private router: Router) { }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      if (this.sidenav) {
        this.sidenav.toggle();
      }
    });
  } 

  // public currentSelected(loadModuleName: string): void {

  // }

  // public loadCurrencyExchange(): void {
  //   this.router.navigate(['/currency-exchange']);
  //   this.isCurrencyExchange = !this.ss;
  //   console.log(this.ss);
  // }



  public loadModules(loadModuleName: string): void {
    if (loadModuleName === this.moduleName.CURRENCY_EXCHANGE) {
      this.isCurrencyExchange = true;
      this.isSavingAccounts = false;
    } else if (loadModuleName === this.moduleName.SAVING_ACCOUNTS) {
      this.isCurrencyExchange = false;
      this.isSavingAccounts = true;
    }
  }

}
