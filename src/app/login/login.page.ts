import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../providers/auth-service.service";
import { Router } from "@angular/router";
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  authForm: FormGroup;

  loginUser(form) {
    console.log("form data is: ", form);
    this.authService.login();
    this.router.navigate(["home"]);
    this.authForm.reset();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      password: new FormControl("", Validators.required),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
          )
        ])
      )
    });
  }
}
