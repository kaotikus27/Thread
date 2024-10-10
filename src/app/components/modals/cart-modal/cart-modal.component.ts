import { Component } from '@angular/core';
import { MockData } from '../../../model/Mockdata';
import { GetAPIService } from '../../../services/get-api.service';
import { switchMap } from 'rxjs/operators';
import { interval ,forkJoin} from 'rxjs';
@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.scss'
})
export class CartModalComponent {
  boughtData:MockData[]=[];
  public totalCartItem : number = 0;
  public totalPriceItem: number = 0;

  constructor(
    private mainservice:GetAPIService,

  ){
  }
  ngOnInit() {interval(200)
    .pipe(
      switchMap(() => {
        return forkJoin({
          boughtData: this.mainservice.getAllBoughtData(),
          totalCartItem: this.mainservice.getAllBoughtDataLenght()
        });
      })
    )
    .subscribe(({ boughtData, totalCartItem }) => {
      this.boughtData = boughtData;
      this.totalCartItem = totalCartItem.length;
      this.getTotal();
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
}
