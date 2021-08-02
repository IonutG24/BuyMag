import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'products', component: ProductsComponent },
  // {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
