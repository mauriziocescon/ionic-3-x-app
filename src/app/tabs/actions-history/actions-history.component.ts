import { Component, OnInit } from "@angular/core";

import { NavController } from "ionic-angular";
import { ActionsService } from "../../core/core.module";

@Component({
  selector: "actions-history",
  templateUrl: "actions-history.component.html"
})
export class ActionsHistoryComponent implements OnInit {
  private history: string[];

  constructor(private navCtrl: NavController,
              private actions: ActionsService) {
  }

  ngOnInit(): void {
    this.history = [];
  }

  ionViewWillEnter(): void {
    this.history = this.actions.getActions();
  }
}
