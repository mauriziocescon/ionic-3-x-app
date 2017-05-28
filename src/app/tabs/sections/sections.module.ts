import { NgModule } from "@angular/core";

import { IonicModule } from "ionic-angular";

import { SharedModule } from "../../shared/shared.module";

import { TasksModule } from "./tasks/tasks.module";

import { SectionsComponent } from "./sections.component";
import { SectionEditComponent } from "./section-edit/section-edit.component";

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(SectionsComponent),
    TasksModule
  ],
  declarations: [
    SectionsComponent,
    SectionEditComponent
  ],
  entryComponents: [
    SectionEditComponent
  ],
  providers: []
})
export class SectionsModule {
}
