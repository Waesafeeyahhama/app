import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BehaviorAddPage } from './behavior-add';

@NgModule({
  declarations: [
    BehaviorAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BehaviorAddPage),
  ],
})
export class BehaviorAddPageModule {}
