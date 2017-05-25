import { Component } from "@angular/core";

import { Platform } from "ionic-angular";
import { StatusBar, Splashscreen } from "ionic-native";
import { TranslateService } from "ng2-translate";

import { TabsComponent } from "./tabs/tabs.module";

@Component({
  templateUrl: "app.component.html"
})
export class AppComponent {
  public rootPage: any;

  constructor(platform: Platform, translate: TranslateService) {
    this.rootPage = TabsComponent;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      translate.setDefaultLang("en");
      translate.use("en");
    });
  }
}
