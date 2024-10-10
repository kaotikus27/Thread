import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitsComponent } from './components/headline/benefits/benefits.component';
import { NewarrivalsComponent } from './components/headline/newarrivals/newarrivals.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { InstaComponent } from './components/pages/insta/insta.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { NavigationComponent } from './components/pages/navigation/navigation.component';
import { RecentlyboughtComponent } from './components/pages/recentlybought/recentlybought.component';
import { ShoppingbagComponent } from './components/pages/shoppingbag/shoppingbag.component';
import { TrendingComponent } from './components/pages/trending/trending.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartModalComponent } from './components/modals/cart-modal/cart-modal.component';
import { CurrencyComponent } from './components/currency/currency.component';

@NgModule({
  declarations: [
    AppComponent,
    BenefitsComponent,
    NewarrivalsComponent,
    FooterComponent,
    InstaComponent,
    LandingComponent,
    NavigationComponent,
    RecentlyboughtComponent,
    ShoppingbagComponent,
    TrendingComponent,
    CartModalComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
