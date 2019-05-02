import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product.model';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  loadedProduct: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    // map all parameter it receives
    this.activatedRoute.paramMap.subscribe(paramMap => {

      // check if parameter does not have productId
      if (!paramMap.has('productId')) {

        // redirect user
        this.router.navigate(['/products']);
        return;
      }
      // extract productId
      const productId = paramMap.get('productId');

      //use service to load product by id
      this.loadedProduct = this.productsService.getProduct(productId);


      //Uncomment this line
     // this.loadedProduct = this.productsService.getProduct(productId);
    });
  }

  onDeleteProduct(){
    //Show alert message before delete
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete this product?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.productsService.deleteProduct(this.loadedProduct.id);
          this.router.navigate(['/products']);
        }
      }
    ]
    }).then(alertEl => {
        alertEl.present();
    });
  }

}
