import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, Http } from "@angular/http";
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from "@angular/common";

import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from "ng2-translate";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { TabsModule } from "./tabs/tabs.module";

import { AppComponent } from "./app.component";

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, "assets/i18n/", ".json");
}

export function provideStorage() {
  return new Storage({});
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    CoreModule.forRoot(),
    SharedModule,
    TabsModule
  ],
  exports: [
    AppComponent,
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent
  ],
  providers: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    SplashScreen,
    StatusBar,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    {
      provide: Storage,
      useFactory: provideStorage
    }
  ]
})
export class AppModule {
}
