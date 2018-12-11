import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CompanyDetailComponent} from './companies/company-detail.component';
import {CompanyListComponent} from './companies/company-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CompanyDetailComponent,
    CompanyListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'companies', component: CompanyListComponent },
      {
        path: 'companies/:symbol',
        component: CompanyDetailComponent
      },
      { path: '', redirectTo: 'companies', pathMatch: 'full' }
    ])
  ]
})
export class StockModule { }
