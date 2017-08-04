import { Injectable } from "@angular/core";

import * as Constants from "./app-constants.model";

@Injectable()
export class AppConstantsService {
  WS_URL = "";

  ACTIONS_LENGHT = 5;
  TODO_DB_KEY = "todobd";

  SECTION_TYPES = ["0", "1", "2", "3", "4", "5"];

  SUPPORTED_LANG = ["en"];
  SUPPORTED_LANG_DESC = ["English"];

  LANGUAGE_ID = "LANGUAGE_ID";
  TOKEN_ID = "TODO_TOKEN_ID";

  protected api: Constants.Api;
  protected application: Constants.Application;
  protected languages: Constants.Languages;
  protected localStorageKey: Constants.LocalStorageKey;

  constructor() {
    this.api = new Constants.Api();
    this.application = new Constants.Application();
    this.languages = new Constants.Languages();
    this.localStorageKey = new Constants.LocalStorageKey();
  }

  public get Api(): Constants.Api {
    return this.api;
  }

  public get Application(): Constants.Application {
    return this.application;
  }

  public get Languages(): Constants.Languages {
    return this.languages;
  }

  public get LocalStorageKey(): Constants.LocalStorageKey {
    return this.localStorageKey;
  }
}
