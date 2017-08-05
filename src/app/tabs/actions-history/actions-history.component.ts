import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";
import { ActionsService } from "../../core/core.module";

@Component({
  selector: "actions-history",
  templateUrl: "actions-history.component.html"
})
export class ActionsHistoryComponent implements OnInit {
  private navCtrl: NavController;
  private actions: ActionsService;

  private history: string[];

  constructor(navCtrl: NavController,
              actions: ActionsService) {
    this.navCtrl = navCtrl;
    this.actions = actions;
  }

  public ngOnInit(): void {
    this.history = [];
  }

  public ionViewWillEnter(): void {
    this.history = this.actions.getActions();
  }
}
