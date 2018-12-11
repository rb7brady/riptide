import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ICompany} from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl = 'http://localhost:3000/mod/iex/';
  private allCompanies = 'http://localhost:3000/companies/all';

  constructor(private http: HttpClient) { }
  getCompanies(): Observable<ICompany[]> {
    return this.http.get<ICompany[]>(this.allCompanies).pipe(
      tap(data => console.log('http resposne:' + JSON.stringify(data))),
      catchError(null)
    );
  }
  getCompany(symbol: string): Observable<ICompany> {
    return this.http.get<ICompany>(this.companyUrl + symbol).pipe(
      tap(data => console.log('http response:' + JSON.stringify(data))),
      catchError(null)
    );
  }
}
