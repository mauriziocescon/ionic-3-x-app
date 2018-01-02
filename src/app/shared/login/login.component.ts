import { Component, OnInit } from "@angular/core";

import { ViewController, AlertController } from "ionic-angular";

@Component({
  selector: "login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  private viewCtrl: ViewController;
  private alertCtrl: AlertController;

  username: string | undefined;
  password: string | undefined;

  private loading: boolean;

  constructor(viewCtrl: ViewController,
              alertCtrl: AlertController) {
    this.viewCtrl = viewCtrl;
    this.alertCtrl = alertCtrl;
  }

  get canLogin(): boolean {
    return this.username !== undefined && this.password !== undefined && !this.loading;
  }

  ngOnInit(): void {
    this.loading = false;
  }

  login(): void {
    if (this.canLogin) {
      this.loading = true;

      // ...
      this.viewCtrl.dismiss(true);
      this.loading = false;
    }
  }

  dismiss(): void {
    this.viewCtrl.dismiss(false);
  }
}
