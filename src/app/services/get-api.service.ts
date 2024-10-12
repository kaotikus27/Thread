import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MockData } from '../model/Mockdata';
import { BehaviorSubject,interval, Subject} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAPIService {

  APIURL = "http://localhost:3000/MockData"
  APIURLBOUGHT = "http://localhost:3000/BoughtData"


 /*  APIURL = "https://kaotikus27.github.io/recentlybought/MockData.js"
  APIURLBOUGHT = "https://kaotikus27.github.io/recentlybought/MockDatas.js" */
  

  
  
  public cartItemList: any =[];
  public productList = new BehaviorSubject<any>([]);
  

  constructor(
    private _http:HttpClient
    
  ) {
     
   }



  /* all existing data */
  getAll(){
    return this._http.get<MockData[]>(this.APIURL);
  }

  /* bought data */
  /* getAllBoughtData(){
    return this._http.get<MockData[]>(this.APIURLBOUGHT);
  } */
  getAllBoughtDataLenght(){
    return this._http.get<MockData[]>(this.APIURLBOUGHT);
  }

  /* testing for filtering quantity */
  getAllBoughtData() {
    return this._http.get<MockData[]>(this.APIURLBOUGHT).pipe(
      map((items: MockData[]) => {
        // Create a new array to store processed items
        const processedItems: MockData[] = [];
        // Create a map to keep track of item quantities
        const itemMap = new Map<number, MockData>();
        items.forEach(item => {
          // Check if the item already exists in the map
          if (itemMap.has(item.itemId)) {
            // If it exists, increment the quantity
            const existingItem = itemMap.get(item.itemId)!;
            existingItem.qnty += 1; // Increment the quantity
          } else {
            // If it doesn't exist, add it to the map
            item.qnty = 1; // Initialize quantity to 1 for the first occurrence
            itemMap.set(item.itemId, item);
          }
        });
        // Convert the map back to an array
        itemMap.forEach(item => processedItems.push(item));
        return processedItems; // Return the processed items array
      })
    );
  }

  /* orig */
  addToCart(data:MockData){
    return this._http.post(this.APIURLBOUGHT,data);
  }

  addItemToCart(product: any) {
    this.cartItemList.push(product); 
    this.productList.next(this.cartItemList); 
    this._http.post(this.APIURLBOUGHT, product).subscribe(
      (response) => {
        console.log('Item successfully posted to the backend', response);
      },
      (error) => {
        console.error('Error posting item to the backend', error);
      }
    );
  }

  getCartItems() {
    return this.productList.asObservable();
  }


  removeCartItem(Product:any){
    this.cartItemList = this.cartItemList.filter((a: any) => a.id !== Product.id);
    this.productList.next(this.cartItemList);

    this._http.delete(`${this.APIURLBOUGHT}/${Product.id}`).subscribe(
      (response) => {
        console.log('Item successfully removed from the backend', response);
      },
      (error) => {
        console.error('Error removing item from the backend', error);
      }
    );
  }
  

  removeAllCartItems(){
    this.cartItemList.forEach((product: any) => {
      this._http.delete(`${this.APIURLBOUGHT}/${product.id}`).subscribe(
        (response) => {
          console.log(`Item with id ${product.id} successfully removed from the backend`, response);
        },
        (error) => {
          console.error(`Error removing item with id ${product.id} from the backend`, error);
        }
      );
    });

    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }







  
 
}
