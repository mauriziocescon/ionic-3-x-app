import { Component, OnInit } from "@angular/core";

import { ViewController, AlertController } from "ionic-angular";

import "rxjs/Rx";
import * as Rx from "rxjs";

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
    return this.username && this.username.length &&
      this.password && this.password.length &&
      !this.loading;
  }

  public ngOnInit(): void {
    this.loading = false;
  }

  login(): void {
    if (this.canLogin) {
      this.loading = true;
      // Rx.Observable.fromPromise(this.auth.login(this.username, this.password))
      //   .subscribe(
      //     () => {
      //       this.viewCtrl.dismiss(true);
      //       this.loading = false;
      //     },
      //     (err) => {
      //       this.loading = false;
      //       let alert = this.alertCtrl.create({
      //         title: err.code,
      //         subTitle: err.message,
      //         buttons: ["Dismiss"]
      //       });
      //       alert.present();
      //     },
      //     () => {
      //       this.loading = false;
      //       console.log("Request Complete");
      //     }
      //   );
    }
  }

  dismiss(): void {
    this.viewCtrl.dismiss(false);
  }
}
