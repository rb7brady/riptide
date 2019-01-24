import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CompanyDetailComponent} from './companies/company-detail.component';
import {CompanyListComponent} from './companies/company-list.component';
import {RouterModule} from '@angular/router';
import {OptionComponent} from './option/option.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material';
import {DividendComponent} from './dividend/dividend.component';

@NgModule({
  declarations: [
    CompanyDetailComponent,
    CompanyListComponent,
    OptionComponent,
    DividendComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: 'companies', component: CompanyListComponent },
      {
        path: 'companies/:symbol',
        component: CompanyDetailComponent
      },
      { path: 'options', component: OptionComponent },

      { path: '', redirectTo: 'companies', pathMatch: 'full' }
    ])
  ]
})
export class StockModule { }
