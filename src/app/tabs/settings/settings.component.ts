import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";
import { TranslateService } from "ng2-translate";

import { AppLanguageService } from "../../core/core.module";

@Component({
  selector: "settings",
  templateUrl: "settings.component.html"
})
export class SettingsComponent implements OnInit {
  private navCtrl: NavController;
  private translate: TranslateService;
  private appLanguage: AppLanguageService;

  public languages: string[];
  public selectedLanguageId: string;

  constructor(navCtrl: NavController,
              translate: TranslateService,
              appLanguageService: AppLanguageService) {
    this.navCtrl = navCtrl;
    this.translate = translate;
    this.appLanguage = appLanguageService;
  }

  public ngOnInit(): void {
    this.selectedLanguageId = this.appLanguage.getLanguageId();
    this.languages = this.appLanguage.getSupportedLanguagesList();
  }

  public selectLanguage(): void {
    if (this.appLanguage.getLanguageId() !== this.selectedLanguageId) {
      this.appLanguage.setLanguageId(this.selectedLanguageId);
    }
  }
}
