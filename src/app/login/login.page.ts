import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../providers/auth-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  loginUser(form) {
    console.log("form data is: ", form);
    this.authService.login();
    this.router.navigate(["home"]);
  }

  ngOnInit() {}
}
