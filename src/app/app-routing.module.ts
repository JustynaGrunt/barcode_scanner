import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


//Setting up all routes
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  //{ path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
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
  { path: 'add-product', loadChildren: './add-product/add-product.module#AddProductPageModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './auth/register/register.module#RegisterPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
