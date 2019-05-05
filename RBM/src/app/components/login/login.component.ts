import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sMainButton: string;
  bNewUser: boolean;

  constructor() { }

  ngOnInit() {
    this.oldUser();
  }

  newUser(): void {
    this.sMainButton = 'Cadastrar';
    this.bNewUser = true;
  }

  oldUser(): void {
    this.sMainButton = 'Login';
    this.bNewUser = false;
  }

  GetButtonData(): string {
    return this.sMainButton;
  }
}
