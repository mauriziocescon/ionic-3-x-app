import { Component, OnInit } from "@angular/core";

import { ActionsHistoryComponent } from "./actions-history/actions-history.component";
import { SectionsComponent } from "./sections/sections.component";
import { SettingsComponent } from "./settings/settings.component";

@Component({
  templateUrl: "tabs.component.html"
})
export class TabsComponent implements OnInit {
  protected tab1Root: any;
  protected tab2Root: any;
  protected tab3Root: any;

  constructor() {
  }

  ngOnInit(): void {
    this.tab1Root = SectionsComponent;
    this.tab2Root = ActionsHistoryComponent;
    this.tab3Root = SettingsComponent;
  }
}
