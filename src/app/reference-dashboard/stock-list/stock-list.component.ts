import { Component,OnInit, OnChanges } from '@angular/core';
import {StockService} from '../stock.service';
import {IStock} from '../models/stock';
import {IDividend} from '../models/dividend';

@Component({
  selector: 'pm-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: IStock[];
  errorMessage: string;
  stockDividends: IDividend[];
  showDivs: boolean;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
      },
      error => this.errorMessage = <any>error
    );
  }

  toggleDivs(sym): void {
    console.log(sym);
    this.showDivs = false;
    console.log(this.showDivs);
    this.stockService.getDividends(sym).subscribe(
      dividends => {
        this.stockDividends = dividends;
        this.showDivs = true;
      },
      error => this.errorMessage = <any>error
    );
  }

}
