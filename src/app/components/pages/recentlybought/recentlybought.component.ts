import { Component, OnInit } from '@angular/core';
import { MockData } from '../../../model/Mockdata';
import { GetAPIService } from '../../../services/get-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recentlybought',
  templateUrl: './recentlybought.component.html',
  styleUrl: './recentlybought.component.scss'
})
export class RecentlyboughtComponent implements OnInit {

  constructor(
    private mainservice:GetAPIService,
    private router:Router
  ){
  }
  data:any;
  mockData:MockData[]=[];
  boughtData:MockData[]=[];
  public totalCartItem: number = 0;
  public productList:any;

  ngOnInit(): void {
    this.mainservice.getAll().subscribe((data)=>{
      this.mockData = data
      this.totalCartItem = data.length;
      console.log(this.getCartTotal())
    });

  }


  addtocart(items:any){
    this.mainservice.addItemToCart(items)
    console.log("Item added to cart:", items);
    
  }

  getCartTotal(){
    return this.boughtData.reduce((total, item) => total + item.price * item.qnty, 0);
  }

  
}
