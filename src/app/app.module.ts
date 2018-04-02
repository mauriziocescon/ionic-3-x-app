import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TabsModule } from './tabs/tabs.module';

import { AppComponent } from './app.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function provideStorage() {
  return new Storage({});
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
    CoreModule.forRoot(),
    SharedModule,
    TabsModule,
  ],
  exports: [
    AppComponent,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
  ],
  providers: [

    SplashScreen,
    StatusBar,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler,
    },
    {
      provide: Storage,
      useFactory: provideStorage,
    },
  ],
})
export class AppModule {
}
