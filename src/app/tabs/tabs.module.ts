import { NgModule } from "@angular/core";

import { IonicModule } from "ionic-angular";

import { SharedModule } from "../shared/shared.module";

import { ActionsHistoryModule } from "./actions-history/actions-history.module";
import { SectionsModule } from "./sections/sections.module";
import { SettingsModule } from "./settings/settings.module";

import { TabsComponent } from "./tabs.component";

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(TabsComponent),
    ActionsHistoryModule,
    SectionsModule,
    SettingsModule
  ],
  declarations: [
    TabsComponent
  ],
  exports: [
    TabsComponent
  ],
  providers: []
})
export class TabsModule {
}

export { TabsComponent };
