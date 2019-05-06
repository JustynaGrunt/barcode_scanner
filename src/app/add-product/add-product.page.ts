import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController, NavParams, ToastController } from '@ionic/angular';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../services/image.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit{

  addForm: FormGroup;
  submitted = false;



  public imageUrl: any;
  public thumbnail: any;

  private _ID: String;
  public pageTitle: string;

  public imageData: string;


  constructor(private formBuilder: FormBuilder, private router: Router,
    private camera: Camera, public imageService: ImageService, private productService: ProductService){

  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      barcodeId: ['', Validators.required],
      title: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required]
      // ingredients: ['', Validators.required]
    });

  }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.valid){
      this.productService.addProduct(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }


  get f() { return this.addForm.controls; }

  takePicture(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      return this.imageData = base64Image;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
    });
  }


takePhotograph() : void
{
   this.imageService
   .takePhotograph()
   .then((image)=>
   {
      this.thumbnail   	= image.toString();
      this.imageUrl   		= image.toString();
   })
   .catch((err)=>
   {
      console.log(err);
   });
}


selectImage() : void
{
   this.imageService
   .selectPhotograph()
   .then((image)=>
   {
      this.thumbnail   	= image.toString();
      this.imageUrl   		= image.toString();
   })
   .catch((err)=>
   {
      console.log(err);
   });
}

  /**
    * Use the ionViewDidLoad lifecycle event to detect whether particular
    * navigation parameters were set and, if so, retrieve those and assign
    * to public properties (which can then be displayed/edited in the template
    * form)
    **/
  //  ionViewDidLoad() : void
  //  {
  //    if(this.navParams.get("record"))
  //    {
  //       this._ID 				=	this.navParams.data.record._id;
  //       this.barcodeId 				=	this.navParams.data.record.barcodeId;
  //       this.title		=	this.navParams.data.record.title;
  //       this.brand			=	this.navParams.data.record.brand;
  //       this.type   			=	this.navParams.data.record.type;
  //       this.ingredients			=	this.navParams.data.record.ingredients;
  //       this.imageUrl			=	this.navParams.data.record.imageUrl;
  //       this.thumbnail			=	this.navParams.data.record.thumbnail;
  //       this.pageTitle 			=	"Update";
  //    }
  //    else {
  //       this.pageTitle 			=	"Create";
  //    }
  //  }



  //  manageGallery() : void
  //  {
  //     // Retrieve form field values, set up the JavaScript map of values to be
  //     // passed to node/MongoDB and declare the URL that we need to supply to
  //     // the Angular Http calls
  //     const barcodeId: any = this.form.controls['barcodeId'].value,
  //           title: any = this.form.controls['title'].value,
  //           brand: any  = this.form.controls['brand'].value,
  //           type: any  = this.form.controls['type'].value,
  //           thumbnail : any  = this.form.controls['thumbnail'].value,
  //           imageUrl: any = this.form.controls['imageUrl'].value,
  //           ingredients: any  = this.form.controls['ingredients'].value,
  //           headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
  //           options: any = { barcodeId : barcodeId, title : title, brand : brand, type: type,
  //           thumbnail : thumbnail, imageUrl: imageUrl,ingredients: ingredients},
  //           url: any = this._HOST;

  //     // Do we have a record to update?
  //     if(this.navParams.get("record"))
  //     {
  //        // Use the HttpClient put method to update the existing record
  //        this._HTTP
  //        .put(url + '/' + this._ID, options, headers)
  //        .subscribe((data : any) =>
  //        {
  //           // If the request was successful clear the form of data
  //           // and notify the user
  //           this.clearForm();
  //           this.displayNotification(name + ' was successfully updated');
  //        },
  //        (error : any) =>
  //        {
  //           console.dir(error);
  //        });
  //     }
  //     else
  //     {
  //        // Use the HttpClient post method to create a new record
  //        this._HTTP
  //        .post(url, options, headers)
  //        .subscribe((data : any) =>
  //        {
  //           // If the request was successful clear the form of data
  //           // and notify the user
  //           this.clearForm();
  //           this.displayNotification(name + ' was successfully created');
  //        },
  //        (error : any) =>
  //        {
  //           console.dir(error);
  //        });
  //     }
  //  }

  //  clearForm() : void
  //  {
  //     this.barcodeId = '';
  //     this.title = '';
  //     this.brand = '';
  //     this.type	= '';
  //     this.thumbnail = '';
  //     this.imageUrl = '';
  //     this.ingredients = '';
  //     this._ID = '';
  //  }

  //  async displayNotification(message : string) {
  //   const toast = await this._TOAST.create({
  //     message: message,
  //     duration: 3000
  //   });
  //   toast.present();
  // }

   /**
    * Use the device camera to capture a photographic image
    * (courtesy of the takePhotograph method of the ImageProvider
    * service) and assign this, as a bade64-encoded string, to
    * public properties used in the component template
    **/

}
