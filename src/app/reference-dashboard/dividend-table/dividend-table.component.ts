import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {StockService} from '../stock.service';
import {IDividend} from '../models/dividend';

@Component({
  selector: 'pm-dividend-table',
  templateUrl: './dividend-table.component.html',
  styleUrls: ['./dividend-table.component.css']
})
export class DividendTableComponent implements OnInit, OnChanges {
  selectedSymbol: string;
  // dividends: IDividend[];
  // @Input() testValue: string;
  // @Input() displayDividends: boolean;
  @Input() dividends: IDividend[];
  @Input() displayDetail: boolean;
  // @ViewChild('tableElement') tableElementRef: ElementRef;
  @ViewChild('tableElement') tableElementRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
