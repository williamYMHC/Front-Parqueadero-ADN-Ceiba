import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent implements OnInit {

  title: string;
  @Input()
  items: MenuItem[];

  constructor() { 
    this.title="SistParkingLot"
  }

  ngOnInit() {
  }

}
