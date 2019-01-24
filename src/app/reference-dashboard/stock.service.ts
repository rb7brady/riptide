import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {IStock} from './models/stock';
import {IDividend} from './models/dividend';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private topStocks = 'http://localhost:3000/companies/all/top';
  private dividends = 'http://localhost:3000/publicAPI/iex/dividend/';

  constructor(private http: HttpClient) { }
  getStocks(): Observable<IStock[]> {
    return this.http.get<IStock[]>(this.topStocks).pipe(
      tap(data => console.log('http response:' + JSON.stringify(data))),
      catchError(null)
    );
  }

  getDividends(symbol: string): Observable<IDividend[]> {
    return this.http.get<IDividend[]>(this.dividends + symbol).pipe(
      tap(data => console.log('http response:' + JSON.stringify(data))),
      catchError(null)
    );
  }

}
