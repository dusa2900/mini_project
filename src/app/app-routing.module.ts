import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderfooterComponent } from './HOME/headerfooter/headerfooter.component';
import { HomeComponent } from './HOME/home/home.component';
import { ForgotpasswordComponent } from './LOGIN/forgotpassword/forgotpassword.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetpasswordComponent } from './LOGIN/resetpassword/resetpassword.component';
import { LaptopsComponent } from './PRODUCTS/ELECTRONICS/laptops/laptops.component';
import { MobileComponent } from './PRODUCTS/ELECTRONICS/mobile/mobile.component';
import { ProductsComponent } from './PRODUCTS/products/products.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'headerfooter/home'
  },
  {path:'headerfooter',component:HeaderfooterComponent,children:[
    {path:"home",component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'forgotpassword',component:ForgotpasswordComponent},

    
    {path:'resetpassword',component:ResetpasswordComponent},
    {path:"products",component:ProductsComponent,children:[
      {path:'mobiles',component:MobileComponent},
      {path:'laptops',component:LaptopsComponent}

    ]
  }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
