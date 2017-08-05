import { Component, OnInit } from "@angular/core";

import { ViewController, AlertController } from "ionic-angular";

import { AppConstantsService } from "../../core/core.module";

@Component({
  selector: "login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  private viewCtrl: ViewController;
  private alertCtrl: AlertController;
  private appConstants: AppConstantsService;

  public username: string;
  public password: string;

  private loading: boolean;

  constructor(viewCtrl: ViewController, alertCtrl: AlertController/*, appConstantsService: AppConstantsService*/) {
    this.viewCtrl = viewCtrl;
    this.alertCtrl = alertCtrl;
    // this.appConstants = appConstantsService;
  }

  get canLogin(): boolean {
    return this.username && this.password && !this.loading;
  }

  public ngOnInit(): void {
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
