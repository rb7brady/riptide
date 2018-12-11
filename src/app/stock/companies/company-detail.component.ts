import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICompany } from './company';
import {RouterTestingModule} from '@angular/router/testing';
import {CompanyService} from './company.service';

@Component({
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  pageTitle: string = 'Company Detail';
  company: ICompany;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private companyService: CompanyService) { }
  ngOnInit() {
    let symbol = this.route.snapshot.paramMap.get('symbol');
    console.log('ngOnInit for company-detail');
    this.pageTitle += `: ${symbol}`;
    this.companyService.getCompany(symbol).subscribe(
      company => this.company = company ,
      error => this.errorMessage = <any>error);
  }
  onBack(): void {
    this.router.navigate(['/companies']);
  }

}
