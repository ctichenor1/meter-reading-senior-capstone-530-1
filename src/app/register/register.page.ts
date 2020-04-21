import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication-service';
import { Register } from '../interfaces/register.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  //constructor(public authenticationService: AuthenticationService, public registerInfo: Register) { }

  ngOnInit() {
  }

}
