import { Component } from "@angular/core";

import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TranslateService } from "ng2-translate";

import { TabsComponent } from "./tabs/tabs.module";

@Component({
  templateUrl: "app.component.html"
})
export class AppComponent {
  public rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, translate: TranslateService) {
    this.rootPage = TabsComponent;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      translate.setDefaultLang("en");
      translate.use("en");
    });
  }
}
