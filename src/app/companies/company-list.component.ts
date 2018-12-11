import { Component, OnInit } from '@angular/core';
import {ICompany} from './company';
import {CompanyService} from './company.service';

@Component({
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  pageTitle: string = 'Company List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCompanies = this.listFilter ? this.performFilter(this.listFilter) : this.companies;
  }
  filteredCompanies: ICompany[];
  companies: ICompany[] = [];
  constructor(private companyService: CompanyService) { }
  performFilter(filterBy: string): ICompany[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.companies.filter((company: ICompany) =>
      company.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      companies => {
        this.companies = companies;
        this.filteredCompanies = this.companies;
      },
      error => this.errorMessage = <any>error
    );
  }

}
