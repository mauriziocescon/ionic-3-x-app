import { Injectable } from "@angular/core";

import { AppConstantsService } from "./app-constants.service";
import { UtilsService } from "./utils.service";
import { SectionDb, TaskDb } from "./db/todo.model";

@Injectable()
export class HelperService {
  private appConstants: AppConstantsService;
  private utils: UtilsService;

  constructor(appConstants: AppConstantsService, utils: UtilsService) {
    this.appConstants = appConstants;
    this.utils = utils;
  }

  // has = how about sales
  public mapHowAboutSalesGetTodosToDbEntries(hasTasks: Array<any>): any {

    let secsDb: Array<SectionDb> = [];

    for (let hasTask of hasTasks) {

      let sIndex = secsDb.findIndex((secDb: SectionDb) => {
        return secDb.id == hasTask.predefined_activities.id;
      });

      let secDb = sIndex != -1 ? secsDb[sIndex] : new SectionDb(hasTask.predefined_activities.id);

      secDb.creationDate = this.utils.getDate();
      secDb.type = hasTask.predefined_activities.title;
      secDb.description = hasTask.predefined_activities.description;

      secDb.tasks = sIndex != -1 ? secDb.tasks : [];

      let taskDb = new TaskDb(hasTask.id);
      taskDb.creationDate = this.utils.getDate();
      taskDb.description = hasTask.name;
      taskDb.done = hasTask.is_finished;

      secDb.tasks.push(taskDb);
      secsDb.push(secDb);
    }

    return secsDb;
  }
}
