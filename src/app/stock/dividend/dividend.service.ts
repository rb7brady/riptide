import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IDividend} from './dividend';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DividendService {

  private dividends = 'http://localhost:3000/publicAPI/iex/dividend/';
  constructor(private http: HttpClient) { }

  getDividends(symbol: string): Observable<IDividend[]> {
    return this.http.get<IDividend[]>(this.dividends + symbol).pipe(
      tap(data => console.log('http response:' + JSON.stringify(data))),
      catchError(null)
    );
  }
}
