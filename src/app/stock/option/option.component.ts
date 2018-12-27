import {Component, OnInit, ViewChild} from '@angular/core';
import {IOption} from './option';

import {OptionService} from './option.service';
import {MatSort, MatTableDataSource, Sort} from '@angular/material';


@Component({
  selector: 'pm-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  options: IOption[] = [];
  sortedData: IOption[];
  errorMessage: string;
  columnsToDisplay = ['symbol', 'price', 'processed_premium', 'created_at', 'opening_strategy', 'closing_strategy'];
  dataSource = new MatTableDataSource(this.options);

  @ViewChild(MatSort) sort: MatSort;


  constructor(private optionService: OptionService) {
    this.sortedData = this.options.slice();

  }

  ngOnInit(): void {
    this.optionService.getOptions().subscribe(
      options => {
        this.options = options;
        this.sortedData = options;
      },
      error => this.errorMessage = <any>error
    );
    this.dataSource.sort = this.sort;
    this.sortedData = this.options;

  }

  sortData(sort: Sort) {
    const data = this.options.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'symbol': return compare(a.symbol, b.symbol, isAsc);
        case 'created_at': return compare(a.created_at, b.created_at, isAsc);

        default: return 0;
      }
    });

  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
