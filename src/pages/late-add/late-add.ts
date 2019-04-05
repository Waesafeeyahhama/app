import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AllFunctionsProvider } from '../../providers/all-functions/all-functions';

@IonicPage()
@Component({
    selector: 'page-late-add',
    templateUrl: 'late-add.html',
})
export class LateAddPage {
    student: any = {};
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl: AlertController,
        private allfunc: AllFunctionsProvider
    ) {
        this.student = this.navParams.get("student");
    }
    save() {
        this.allfunc.ajax(this.allfunc.api + "late-add.php", {
            student_id: this.student.student_id
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
