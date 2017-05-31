import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TranslateModule } from "ng2-translate";

import { LoginModule, LoginComponent } from "./login/login.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginComponent,
  ]
})
export class SharedModule {
}

export { LoginComponent };