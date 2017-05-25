import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "ng2-translate";

import { LoginModule, LoginComponent } from "./login/login.module";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LoginModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    LoginModule
  ],
  providers: []
})
export class SharedModule {
}

export { LoginComponent };
