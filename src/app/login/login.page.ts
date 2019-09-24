import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../providers/auth-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(public authService: AuthService) {}

  loginUser() {
    this.authService.login();
  }

  ngOnInit() {}
}
