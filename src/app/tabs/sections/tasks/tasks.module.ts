import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../../shared/shared.module';

import { TasksComponent } from './tasks.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(TasksComponent),
  ],
  declarations: [
    TasksComponent,
    TaskEditComponent,
  ],
  entryComponents: [
    TaskEditComponent,
  ],
  providers: [],
})
export class TasksModule {
}

export { TasksComponent };
