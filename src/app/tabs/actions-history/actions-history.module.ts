import { NgModule } from '@angular/core';

import { IonicModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module';

import { ActionsHistoryComponent } from './actions-history.component';

@NgModule({
  imports: [
    SharedModule,
    IonicModule.forRoot(ActionsHistoryComponent),
  ],
  declarations: [
    ActionsHistoryComponent,
  ],
  providers: [],
})
export class ActionsHistoryModule {
}
