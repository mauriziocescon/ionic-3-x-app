import { Injectable } from "@angular/core";

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

  constructor() {
  }
}
