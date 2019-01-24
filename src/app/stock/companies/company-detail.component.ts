import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompany } from './company';
import {RouterTestingModule} from '@angular/router/testing';
import {CompanyService} from './company.service';
import {IDividend} from '../dividend/dividend';
import {DividendService} from '../dividend/dividend.service';

@Component({
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  pageTitle: string = 'Company Detail';
  company: ICompany;
  dividends: IDividend[];
  errorMessage: string;
  symbol: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private companyService: CompanyService,
              private dividendService: DividendService) { }
  ngOnInit() {
    this.symbol = this.route.snapshot.paramMap.get('symbol');
    console.log('ngOnInit for company-detail');
    this.pageTitle += `: ${this.symbol}`;
    this.companyService.getCompany(this.symbol).subscribe(
      company => this.company = company ,
      error => this.errorMessage = <any>error);
    this.dividendService.getDividends(this.symbol).subscribe(
      dividends => this.dividends = dividends ,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this.router.navigate(['/companies']);
  }
  // getDividends(): void {
  //   console.log('calling getDividends()');
  //   this.dividendService.getDividends(this.symbol).subscribe(
  //     dividends => this.dividends = dividends ,
  //     error => this.errorMessage = <any>error);
  // }

}
