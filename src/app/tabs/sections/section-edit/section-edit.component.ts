import { Component, OnInit } from "@angular/core";

import { ViewController, NavParams } from "ionic-angular";

import "rxjs/Rx";
import { TranslateService } from "@ngx-translate/core";

import { AppConstantsService, Section, UtilsService } from "../../../core/core.module";

@Component({
  selector: "section-edit",
  templateUrl: "section-edit.component.html"
})
export class SectionEditComponent implements OnInit {
  types: any[];
  private section: Section;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private translate: TranslateService,
              private appConstants: AppConstantsService,
              private utils: UtilsService) {
  }

  ngOnInit(): void {
    this.section = this.navParams.get("section");
    this.types = this.appConstants.Application.SECTION_TYPES;
  }

  getSectionTypeDesc(type: string): any {
    return this.utils.getTranslateKeyForSectionType(type);
  }

  save(): void {
    this.translate.get(this.utils.getTranslateKeyForSectionType(this.section.type))
      .subscribe((res: string) => {
        if (this.section.description.length === 0) {
          this.section.description = res;
        }
        this.viewCtrl.dismiss(this.section);
      });
  }

  dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
