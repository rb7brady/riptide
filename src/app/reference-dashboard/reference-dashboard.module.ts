import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockListComponent } from './stock-list/stock-list.component';
import { DividendListComponent } from './dividend-list/dividend-list.component';
import { ReferenceDashboardComponent } from './reference-dashboard/reference-dashboard.component';
import { CompanyListComponent } from '../stock/companies/company-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CompanyDetailComponent} from '../stock/companies/company-detail.component';
import {OptionComponent} from '../stock/option/option.component';
import { DividendTableComponent } from './dividend-table/dividend-table.component';

@NgModule({
  declarations: [StockListComponent, DividendListComponent, ReferenceDashboardComponent, DividendTableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'dash', component: ReferenceDashboardComponent },
      { path: '', redirectTo: 'dash', pathMatch: 'full' }
    ])
  ]
})
export class ReferenceDashboardModule { }
