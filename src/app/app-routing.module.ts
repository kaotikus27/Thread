import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing.component';
import { ShoppingbagComponent } from './components/pages/shoppingbag/shoppingbag.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
},
{
    path:'shoppingbag',
    component:ShoppingbagComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
