import { Component } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "Bank Application";

  constructor(private sideNavService: SideNavService) {}

  clickMenu() {
    this.sideNavService.toggle();
  }
}
