import { NgModule, Optional, SkipSelf, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

import { ActionsService } from './actions.service';
import { AppConstantsService } from './services/app-constants.service';
import { AppLanguageService } from './services/app-language.service';
import { LocalStorageService } from './services/local-storage.service';
import { UtilsService } from './services/utils.service';

import { TodoDataService } from './db/todo.data-service';
import { Task } from './db/tasks.model';
import { Section } from './db/sections.model';

export function createLanguageIdLoader(appLanguageService: AppLanguageService) {
  return appLanguageService.getLanguageId();
}

@NgModule({
  imports: [
    CommonModule,
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        CurrencyPipe,
        DatePipe,
        DecimalPipe,
        PercentPipe,

        ActionsService,
        AppConstantsService,
        AppLanguageService,
        LocalStorageService,
        TodoDataService,
        UtilsService,
        {
          provide: LOCALE_ID,
          useFactory: (createLanguageIdLoader),
          deps: [AppLanguageService],
        },
      ],
    };
  }
}

export {
  ActionsService,
  AppConstantsService,
  AppLanguageService,
  LocalStorageService,
  TodoDataService,
  Task,
  Section,
  UtilsService,
};
