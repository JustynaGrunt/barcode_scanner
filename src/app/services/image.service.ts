import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  //Stores the returned base64 data URI
  public cameraImage : String

  constructor(public http: HttpClient,private _CAMERA : Camera) { }

  /**
    * Uses the Ionic Native Camera plugin to open the device camera
    * and allows the user to take a photograph which is then returned
    * as a base64 data URI
    * */
   takePhotograph() : Promise<any>
   {
      return new Promise(resolve =>
      {
         this._CAMERA.getPicture(
       {
          destinationType : this._CAMERA.DestinationType.DATA_URL,
          targetWidth     : 320,
          targetHeight    : 240
       })
       .then((data) =>
       {
          this.cameraImage  = "data:image/jpeg;base64," + data;
          resolve(this.cameraImage);
       });
      });
   }

    /**
    * Uses the Ionic Native Camera plugin to open the device photolibrary
    * and allows the user to select an image which is then returned as a
    * base64 data URI
    * */
    
    selectPhotograph() : Promise<any>
   {
      return new Promise(resolve =>
      {
         let cameraOptions : CameraOptions = {
             sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
             destinationType    : this._CAMERA.DestinationType.DATA_URL,
           quality              : 100,
           targetWidth          : 320,
           targetHeight         : 240,
           encodingType         : this._CAMERA.EncodingType.JPEG,
           correctOrientation   : true
         };

         this._CAMERA.getPicture(cameraOptions)
         .then((data) =>
         {
            this.cameraImage  = "data:image/jpeg;base64," + data;
      resolve(this.cameraImage);
         });

      });
   }
}
