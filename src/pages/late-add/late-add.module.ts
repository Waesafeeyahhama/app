import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LateAddPage } from './late-add';

@NgModule({
  declarations: [
    LateAddPage,
  ],
  imports: [
    IonicPageModule.forChild(LateAddPage),
  ],
})
export class LateAddPageModule {}
