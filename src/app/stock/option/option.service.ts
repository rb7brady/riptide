import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOption} from './option';
import {catchError, tap} from 'rxjs/operators';
import {ICompany} from '../companies/company';

@Injectable({
  providedIn: 'root'
})
export class OptionService {
  private optionURL = 'http://localhost:3000/mod/iex/';
  private allOptions = 'http://localhost:3000/publicAPI/rh/ordersOptions/options';

  constructor(private http: HttpClient) { }
  getOptions(): Observable<IOption[]> {
    return this.http.get<IOption[]>(this.allOptions).pipe(
      tap(data => console.log('http resposne:' + JSON.stringify(data))),
      catchError(null)
    );
  }
  getOption(symbol: string): Observable<IOption> {
    return this.http.get<IOption>(this.allOptions + symbol).pipe(
      tap(data => console.log('http response:' + JSON.stringify(data))),
      catchError(null)
    );
  }
}
