import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HOME/home/home.component';
import { HeaderfooterComponent } from './HOME/headerfooter/headerfooter.component';
import { MobileComponent } from './PRODUCTS/ELECTRONICS/mobile/mobile.component';
import { ProductsComponent } from './PRODUCTS/products/products.component';
import { LaptopsComponent } from './PRODUCTS/ELECTRONICS/laptops/laptops.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetpasswordComponent } from './LOGIN/resetpassword/resetpassword.component';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './LOGIN/forgotpassword/forgotpassword.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderfooterComponent,
    MobileComponent,
    ProductsComponent,
    LaptopsComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ForgotpasswordComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
