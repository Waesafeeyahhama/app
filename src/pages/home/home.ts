import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LateAddPage } from '../late-add/late-add';
import { AllFunctionsProvider } from '../../providers/all-functions/all-functions';
import { BehaviorAddPage } from '../behavior-add/behavior-add';
import { ActivityPage } from '../activity/activity';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    student_code = "";
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        private barcodeScanner: BarcodeScanner,
        private allfunc: AllFunctionsProvider
    ) {
    }
    scanLate() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.student_code = barcodeData.text;
            this.allfunc.ajax(this.allfunc.api + "student-scan.php", {
                student_code: this.student_code
            }, (res) => {
                if (res.status == true) {
                    this.navCtrl.push(LateAddPage, {
                        student: res.student
                    });
                } else {
                    this.allfunc.showAlert(res.message);
                }
            });
        }).catch(err => {
            this.allfunc.showAlert('Error ' + err);
        });
    }
    scanBahavior() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.student_code = barcodeData.text;
            this.allfunc.ajax(this.allfunc.api + "student-scan.php", {
                student_code: this.student_code
            }, (res) => {
                if (res.status == true) {
                    this.navCtrl.push(BehaviorAddPage, {
                        student: res.student
                    });
                } else {
                    this.allfunc.showAlert(res.message);
                }
            });
        }).catch(err => {
            this.allfunc.showAlert('Error ' + err);
        });
    }
    openActivity() {
        this.navCtrl.push(ActivityPage);
    }
}
