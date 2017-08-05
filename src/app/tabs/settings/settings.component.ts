import { Component, OnInit } from "@angular/core";

import { NavController, ModalController, LoadingController, AlertController } from "ionic-angular";
import { TranslateService } from "ng2-translate";

import { AppLanguageService } from "../../core/core.module";

import { LoginComponent } from "../../shared/login/login.component";

@Component({
  selector: "settings",
  templateUrl: "settings.component.html"
})
export class SettingsComponent implements OnInit {
  private navCtrl: NavController;
  private modalCtrl: ModalController;
  private loadingCtrl: LoadingController;
  private alertCtrl: AlertController;
  private translate: TranslateService;
  private appLanguage: AppLanguageService;

  public loginSuccess: boolean;

  public languages: string[];
  public selectedLanguageId: string;

  constructor(navCtrl: NavController,
              modalCtrl: ModalController,
              loadingCtrl: LoadingController,
              alertCtrl: AlertController,
              translate: TranslateService,
              appLanguageService: AppLanguageService) {
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.loadingCtrl = loadingCtrl;
    this.alertCtrl = alertCtrl;
    this.translate = translate;
    this.appLanguage = appLanguageService;
  }

  public ngOnInit(): void {
    this.selectedLanguageId = this.appLanguage.getLanguageId();
    this.languages = this.appLanguage.getSupportedLanguagesList();
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

  public selectLanguage(language: string): void {
    if (this.appLanguage.getLanguageId() !== language) {
      this.selectedLanguageId = language;
      this.appLanguage.setLanguageId(this.selectedLanguageId);
    }
  }
}
