import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rbm-navbar',
  templateUrl: './rbm-navbar.component.html',
  styleUrls: ['./rbm-navbar.component.scss']
})
export class RbmNavbarComponent implements OnInit {
  isNavbarCollapsed = true;

  constructor() { }
  ngOnInit() {
  }
}
