import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './companies/company-detail.component';
import { CompanyListComponent } from './companies/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompanyListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'companies/:symbol',
        component: CompanyDetailComponent },
      { path: 'companies', component: CompanyListComponent },
      { path: '', redirectTo: 'companies', pathMatch: 'full' }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
