import { NgModule, Optional, SkipSelf, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ActionsService } from "./actions.service";
import { AppConstantsService } from "./app-constants.service";
import { AuthService } from "./ws/auth.service";
import { HelperService } from "./helper.service";
import { ApisService } from "./ws/apis.service";
import { TodoDataService } from "./db/todo.data-service";
import { Task } from "./db/tasks.model";
import { Section } from "./db/sections.model";
import { UtilsService } from "./utils.service";

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
        AuthService,
        HelperService,
        ApisService,
        TodoDataService,
        UtilsService
      ]
    };
  }
}

export {
  ActionsService,
  AppConstantsService,
  AuthService,
  HelperService,
  ApisService,
  TodoDataService,
  Task,
  Section,
  UtilsService
};
