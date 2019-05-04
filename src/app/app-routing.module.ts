import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Setting up all routes
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'products',
    children: [
      {
        path: '',
        loadChildren: './products/products.module#ProductsPageModule'
      },
      {
        path: ':productId',
        loadChildren: './products/product-detail/product-detail.module#ProductDetailPageModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
