import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  users: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private platform: Platform
  ) {}

  getRandomPictureName(): String {
    // returns a random picture name
    return `picture-${Math.floor(Math.random() * 6) + 1}.jpg`;
  }

  // currently handles only href detection
  // for other buttons on the card, I can use other methods with $event.stopPropagation()
  // to prevend handleUserClick calling
  handleUserClick(target: EventTarget, payload): void {
    console.log("user clickeddd");
    //  handle the external link in the ionic card
    if (target["href"]) {
      if (this.platform.is("cordova")) {
        // here we can use the cordova inappBrowser to open the link
        // - not gonna implement for this example
      } else {
        window.open(target["href"], "_blank");
      }
    } else {
      // if the user clicks on the card, navigate inside the app
      const { id, picture } = payload;
      // using NavigationExtras to pass data between views
      const navigationState: NavigationExtras = {
        state: {
          userPicture: picture
        }
      };
      // actual navigation
      this.router.navigate([`details/${id}`], navigationState);
    }
  }

  ngOnInit(): void {
    if (this.route.snapshot.data["routeData"]) {
      const apiUsers = this.route.snapshot.data["routeData"];
      this.users = apiUsers.map(user => ({
        ...user,
        picture: this.getRandomPictureName()
      }));
      console.log("this.users: ", this.users);
    }
  }
}
