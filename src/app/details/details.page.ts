import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "./../providers/users.service";

@Component({
  selector: "app-list",
  templateUrl: "details.page.html",
  styleUrls: ["details.page.scss"]
})
export class DetailsPage implements OnInit {
  public user: any;
  public errorMessage: any = null;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService
      .getUserById(id)
      .subscribe(data => (this.user = data), err => (this.errorMessage = err));
  }
}
