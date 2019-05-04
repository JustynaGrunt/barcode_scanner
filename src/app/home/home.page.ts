import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Product } from '../products/product.model';
import { ProductService } from '../services/product.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // store the scanned result
  num: string;
  products: any;
  selectedProduct: any;
  productFound: boolean = false;

   // DI barcodeScanner
   constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner, public productService: ProductService, public toastController: ToastController) {

      this.productService.getProducts()
        .subscribe(result => {
          this.products = result;
          console.log(this.products);
        }, error => {
            console.log(error);
      });
  }
 
  // new scan method
  scan() {
    this.selectedProduct = {};

    this.barcodeScanner.scan().then(barcodeData => {

        this.selectedProduct = this.products.find(product => product.barcodeId === barcodeData.text);

        if( this.selectedProduct !== undefined){
          this.productFound = true;
          console.log(this.selectedProduct._id);
          this.navCtrl.navigateForward(`/products/${this.selectedProduct._id}`);

        } else {
          this.productFound = false;
          this.presentToast();
        }
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Product not found.',
      duration: 2000
    });
    toast.present();
  }

}
