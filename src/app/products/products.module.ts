import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products.page';
import { ProductItemComponent } from './product-item/product-item.component';

//For product filtering
import { ReactiveFormsModule } from "@angular/forms";
import { SearchPipe } from '../search.pipe';
import { SortPipe } from '../sort.pipe';


const routes: Routes = [
  {
    path: '',
    component: ProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductsPage, ProductItemComponent, SearchPipe, SortPipe]
})
export class ProductsPageModule {}
