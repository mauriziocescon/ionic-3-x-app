import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";

import { TranslateService } from "@ngx-translate/core";

import { AppLanguageService } from "../../core/core.module";

@Component({
  selector: "settings",
  templateUrl: "settings.component.html"
})
export class SettingsComponent implements OnInit {
  languages: string[];
  selectedLanguageId: string;

  constructor(protected navCtrl: NavController,
              protected translate: TranslateService,
              protected appLanguage: AppLanguageService) {
  }

  ngOnInit(): void {
    this.selectedLanguageId = this.appLanguage.getLanguageId();
    this.languages = this.appLanguage.getSupportedLanguagesList();
  }

  selectLanguage(): void {
    if (this.appLanguage.getLanguageId() !== this.selectedLanguageId) {
      this.appLanguage.setLanguageId(this.selectedLanguageId);
    }
  }
}
