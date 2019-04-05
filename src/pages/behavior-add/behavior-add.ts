import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AllFunctionsProvider } from '../../providers/all-functions/all-functions';

@IonicPage()
@Component({
    selector: 'page-behavior-add',
    templateUrl: 'behavior-add.html',
})
export class BehaviorAddPage {
    student: any = {};
    behavior_types = [];
    behavior_type: any = {};
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        private allfunc: AllFunctionsProvider
    ) {
        this.student = this.navParams.get("student");
        this.loadBehaviorType();
    }
    loadBehaviorType() {
        this.allfunc.ajax(this.allfunc.api + "behavior-type-load.php", {
        }, (res) => {
            this.behavior_types = res.behavior_type;
        });
    }
    save() {
        this.allfunc.ajax(this.allfunc.api + "behavior-add.php", {
            student_id: this.student.student_id,
            behavior_type_id: this.behavior_type.behavior_type_id
        }, (res) => {
            if (res.status == true) {
                this.allfunc.showAlert(res.message, () => {
                    this.navCtrl.pop();
                });
            } else {
                this.allfunc.showAlert(res.message);
            }
        });
    }
    cancel() {
        this.navCtrl.pop();
    }
}
