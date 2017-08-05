import { Component } from "@angular/core";

import { NavController, ModalController, LoadingController, AlertController } from "ionic-angular";
import { TranslateService } from "ng2-translate";

import { LoginComponent } from "../../shared/login/login.component";

@Component({
  selector: "settings",
  templateUrl: "settings.component.html"
})
export class SettingsComponent {
  private navCtrl: NavController;
  private modalCtrl: ModalController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;
  private translate: TranslateService;

  public loginSuccess: boolean;

  constructor(navCtrl: NavController,
              modalCtrl: ModalController,
              loadingCtrl: LoadingController,
              alertCtrl: AlertController,
              translate: TranslateService) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
  }

  public login(): void {
    this.loginSuccess = false;

    let loginModal = this.modalCtrl.create(LoginComponent);
    loginModal.onDidDismiss((login: boolean) => {
      if (login) {
        this.loginSuccess = true;
        // ...
      }
    });

    loginModal.present();
  }
}
