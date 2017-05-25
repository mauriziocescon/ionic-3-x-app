import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "ionic-angular";
import { TranslateModule } from "ng2-translate";

import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    IonicModule.forRoot(LoginComponent)
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule {

}

export { LoginComponent };
