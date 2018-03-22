import { Enum } from '../../shared/shared.module';

export class Api {
  WS_URL = '';
}

export class Application {
  APP_NAME = 'demo';

  ACTIONS_LENGHT = 5;
  TODO_DB_KEY = 'todobd';

  SECTION_TYPES = ['0', '1', '2', '3', '4', '5'];
}

export class Languages {
  DE = 'de';
  EN = 'en';
  IT = 'it';
  SUPPORTED_LANG = ['de', 'en', 'it'];
  SUPPORTED_LANG_DESC = ['Deutsch', 'English', 'Italiano'];
  DEFAULT_LANGUAGE = 'en';
}

export class LocalStorageKey {
  LANGUAGE_ID = new Enum('LANGUAGE_ID');
}
