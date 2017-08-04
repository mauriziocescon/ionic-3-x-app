import { NgModule, Optional, SkipSelf, ModuleWithProviders, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActionsService } from "./actions.service";
import { AppConstantsService } from "./app-constants.service";
import { AppLanguageService } from "./app-language.service";
import { AuthService } from "./ws/auth.service";
import { HelperService } from "./helper.service";
import { LocalStorageService } from "./local-storage.service";
import { ApisService } from "./ws/apis.service";
import { TodoDataService } from "./db/todo.data-service";
import { Task } from "./db/tasks.model";
import { Section } from "./db/sections.model";
import { UtilsService } from "./utils.service";

export function createLanguageIdLoader(appLanguageService: AppLanguageService) {
  return appLanguageService.getLanguageId();
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        "CoreModule is already loaded. Import it in the AppModule only");
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ActionsService,
        AppConstantsService,
        AppLanguageService,
        AuthService,
        HelperService,
        LocalStorageService,
        ApisService,
        TodoDataService,
        UtilsService,
        {
          provide: LOCALE_ID,
          useFactory: (createLanguageIdLoader),
          deps: [AppLanguageService]
        }
      ]
    };
  }
}

export {
  ActionsService,
  AppConstantsService,
  AppLanguageService,
  AuthService,
  HelperService,
  LocalStorageService,
  ApisService,
  TodoDataService,
  Task,
  Section,
  UtilsService
};
