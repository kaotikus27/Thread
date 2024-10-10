import { Component, OnInit } from '@angular/core';
import { MockData } from '../../../model/Mockdata';
import { GetAPIService } from '../../../services/get-api.service';
import { switchMap } from 'rxjs/operators';
import { interval ,forkJoin } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shoppingbag',
  templateUrl: './shoppingbag.component.html',
  styleUrl: './shoppingbag.component.scss'
})
export class ShoppingbagComponent implements OnInit {

  constructor(
    private mainservice:GetAPIService,

  ){
  }

 boughtData:MockData[]=[];
  public totalCartItem : number = 0;
  public totalPriceItem: number = 0;

  ngOnInit() {
      interval(200)
      .pipe(switchMap(()=> this.mainservice.getAllBoughtData()))
      .subscribe((data)=>{
        this.boughtData = data;
        this.getTotal()
    })
    interval(200)
    .pipe(switchMap(() => this.mainservice.getAllBoughtDataLenght()))
    .subscribe((data) => {
      this.totalCartItem = data.length;
    });
  }

  getTotal(){
    this.totalPriceItem = this.boughtData.reduce((accumulator, item) => {
      const price = Number(item.price * item.qnty); 
      return accumulator + (isNaN(price) ? 0 : price); 
    }, 0);
    this.totalPriceItem = parseFloat(this.totalPriceItem.toFixed(2));
    console.log(this.totalPriceItem)
  }

  remove(item:any){  
    this.mainservice.removeCartItem(item)
    console.log("removed", item)
   
  }

  

 

}
