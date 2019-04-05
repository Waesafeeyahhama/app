import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AllFunctionsProvider {
    api: string = "http://desktop-9mrdhia/app/";
    constructor(
        private http: HttpClient,
        private alertCtrl: AlertController,
    ) {
    }
    showAlert(message, callback = null) {
        const alert = this.alertCtrl.create({
            title: 'แจ้งข้อความ',
            subTitle: message,
            //buttons: ['OK']
            buttons: [
                {
                    text: 'ตกลง',
                    handler: () => {
                        if (callback) callback();
                    }
                }
            ]
        });
        alert.present();
    }
    ajax(url, data, callback) {
        this.http.post(url, JSON.stringify(data))
            .subscribe((res: any) => {
                callback(res);
            })
    }
}
