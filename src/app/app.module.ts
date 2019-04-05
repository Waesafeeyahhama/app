import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';
import { LateAddPage } from '../pages/late-add/late-add';
import { AllFunctionsProvider } from '../providers/all-functions/all-functions';
import { BehaviorAddPage } from '../pages/behavior-add/behavior-add';
import { ActivityPage } from '../pages/activity/activity';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LateAddPage,
        BehaviorAddPage,
        ActivityPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        LateAddPage,
        BehaviorAddPage,
        ActivityPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        BarcodeScanner, Camera,
        AllFunctionsProvider
    ]
})
export class AppModule { }
