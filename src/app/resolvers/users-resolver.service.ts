import { UsersService } from "./../providers/users.service";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AllUsersResolverService implements Resolve<any> {
  constructor(private userService: UsersService) {}

  resolve() {
    return this.userService.getUsers();
  }
}
