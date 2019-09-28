import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  users: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  getRandomPictureName() {
    // returns a random picture name
    return `picture-${Math.floor(Math.random() * 6) + 1}`;
  }

  ngOnInit(): void {
    if (this.route.snapshot.data["routeData"]) {
      this.users = this.route.snapshot.data["routeData"];
      console.log("this.users: ", this.users);
    }
  }
}
