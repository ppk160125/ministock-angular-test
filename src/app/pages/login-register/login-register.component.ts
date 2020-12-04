import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {

  //2way data binding
  userData = {
    "email": "",
    "password": ""
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitLogin() {
    // alert("Hey Login Complete");
    if (this.userData.email == "admin@gmail.com" && this.userData.password == "123456") {
      // alert("Login Success");
      this.router.navigate(["backend"]);
    } else {
      alert("Login Failed !!!");
    }
  }

}
