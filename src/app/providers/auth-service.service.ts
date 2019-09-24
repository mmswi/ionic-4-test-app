import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  private isLoggedIn = false;

  constructor() {}

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
