import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbm-navbar',
  templateUrl: './rbm-navbar.component.html',
  styleUrls: ['./rbm-navbar.component.scss']
})
export class RbmNavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = true;

  constructor() { }
  ngOnInit() {
  }

  CloseOnClick(): void {
    this.isNavbarCollapsed = true;
  }
}
