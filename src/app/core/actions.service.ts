import { Injectable } from "@angular/core";

import "rxjs/Rx";

import { AppConstantsService } from "./services/app-constants.service";

@Injectable()
export class ActionsService {
  protected history: string[];

  constructor(protected appConstants: AppConstantsService) {
    this.history = [];
  }

  addAction(desc: string): void {
    this.history.unshift(desc);
    if (this.history.length > this.appConstants.Application.ACTIONS_LENGHT) {
      this.history.pop();
    }
  }

  getActions(): string[] {
    return this.history;
  }
}
