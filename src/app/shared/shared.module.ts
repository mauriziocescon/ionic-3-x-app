import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LoginModule, LoginComponent } from './login/login.module';
import { Enum } from './utilities/enum';
import { KeyValue } from './utilities/keyvalue';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    LoginComponent,
  ],
})
export class SharedModule {
}

export {
  LoginComponent,
  Enum,
  KeyValue,
};
