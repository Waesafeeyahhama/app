import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AllFunctionsProvider } from '../../providers/all-functions/all-functions';

@IonicPage()
@Component({
    selector: 'page-activity',
    templateUrl: 'activity.html',
})
export class ActivityPage {
    activities = [];
    constructor(
        public navCtrl: NavController,
        private allfunc: AllFunctionsProvider
    ) {
        this.loadActivity();
    }
    loadActivity() {
        this.allfunc.ajax(this.allfunc.api + "activity-load.php", {
        }, (res) => {
            this.activities = res.activities
        });
    }
}
