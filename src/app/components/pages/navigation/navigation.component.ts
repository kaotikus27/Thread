import { Component,OnInit  } from '@angular/core';
import { GetAPIService } from '../../../services/get-api.service';
import { MockData } from '../../../model/Mockdata';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {


  constructor(  private mainservice:GetAPIService ){

  }
  data:any;
  mockData:MockData[]=[];
  showCart:boolean = false;


  
  public totaCartItem : number = 0;

  ngOnInit() {
      interval(200)
      .pipe(switchMap(() => this.mainservice.getAllBoughtDataLenght()))
      .subscribe((data) => {
        this.totaCartItem = data.length;
        console.log(this.totaCartItem)
      });
  }

  toggleCart(){
    this.showCart=!this.showCart;
  }

 
  

}
