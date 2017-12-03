import { Enum } from "../../shared/shared.module";

export class Api {
  public WS_URL = "";
}

export class Application {
  public APP_NAME = "demo";

  public ACTIONS_LENGHT = 5;
  public TODO_DB_KEY = "todobd";

  public SECTION_TYPES = ["0", "1", "2", "3", "4", "5"];
}

export class Languages {
  public DE = "de";
  public EN = "en";
  public IT = "it";
  public SUPPORTED_LANG = ["de", "en", "it"];
  public SUPPORTED_LANG_DESC = ["Deutsch", "English", "Italiano"];
  public DEFAULT_LANGUAGE = "en";
}

export class LocalStorageKey {
  public LANGUAGE_ID = new Enum("LANGUAGE_ID");
}
