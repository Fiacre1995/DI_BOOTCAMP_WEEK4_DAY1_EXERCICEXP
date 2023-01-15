import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { FooterComponent } from './footer/footer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ProduitComponent } from './produit/produit.component';
import { MyAppModule } from './my-app/my-app.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EnTeteComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
