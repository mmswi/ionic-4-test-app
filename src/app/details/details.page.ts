import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    // using passed state from the router
    // Note - this won't work on page refresh. For this, a service would be a better option
    this.route.queryParams.subscribe(() => {
      const routeState = this.router.getCurrentNavigation().extras.state;
      if (routeState) {
        this.user = { picture: routeState.userPicture };
      }
    });
  }

  ngOnInit() {
    // getting params from the route params
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.getUserById(id).subscribe(
      data => {
        // merging the current user with the picture prop and received data
        this.user = { ...this.user, ...data };
      },
      err => (this.errorMessage = err)
    );
  }
}
