import { Component } from '@angular/core';
import { GetAPIService } from '../../services/get-api.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent {
  countries: any[] = [];
  selectedFlag: string = '';
  selectedCurrency: string = 'Currency';


  constructor(  private mainservice:GetAPIService ){

  }

  ngOnInit() {
    
  }

  

}
