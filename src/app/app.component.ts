import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CameraPreview } from '@ionic-native/camera-preview';
import { HomePage } from '../pages/home/home';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, cameraPreview: CameraPreview) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let alpha = 1;

let options = {
  x: 0,
  y: 0,
      //width: platform.width(), 
  width: window.screen.width,
      // height: platform.height(),
  height: window.screen.height,
  camera: cameraPreview.CAMERA_DIRECTION.BACK,
  toBack: true,
  tapPhoto: false,
  tapFocus: false,
  previewDrag: false
};
      
      cameraPreview.startCamera(options);
    });
  }
}
