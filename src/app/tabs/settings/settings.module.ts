import { NgModule } from "@angular/core";

import { IonicModule } from "ionic-angular";

import { SharedModule } from "../../shared/shared.module";

import { SettingsComponent } from "./settings.component";

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(SettingsComponent)
  ],
  declarations: [
    SettingsComponent
  ],
  entryComponents: [
    SettingsComponent
  ],
  providers: []
})
export class SettingsModule {
}
