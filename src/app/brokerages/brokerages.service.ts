import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, delay, take, map, catchError } from 'rxjs/operators';
import {Brokerage, RequestCreateBrokerage} from './brokerage.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BrokeragesService {

  public readonly brokeragesURLListarTodos = `${environment.brokeragesURLListarTodos}`;
  public readonly brokeragesURLfindName = `${environment.brokeragesURLfindName}`;
  public readonly brokeragesURLfindId = `${environment.brokeragesURLfindId}`;
  public readonly brokeragesURLfindAccount = `${environment.brokeragesURLfindAccount}`;
  public readonly brokeragesURLPut = `${environment.brokeragesURLPut}`;
  public readonly brokeragesURLPutUpdate = `${environment.brokeragesURLPutUpdate}`;
  public readonly brokeragesURLInsert = `${environment.brokeragesURLInsert}`;
  public readonly brokeragesURLDelete = `${environment.brokeragesURLDelete}`;
  public readonly brokeragesURLpainel = `${environment.brokeragesURLpainel}`;


  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getBrokerageid(id: number): Observable<any> {
    return this.http.get(`${this.brokeragesURLfindId}${id}`);
  }

  getBrokerages(): Observable<Brokerage> {
    return this.http.get<Brokerage>(this.brokeragesURLListarTodos);
  }

  getBrokeragesPainel(): Observable<Brokerage> {
    return this.http.get<Brokerage>(this.brokeragesURLpainel);
  }

  loadByID(id: string) {
    return this.http.get<Brokerage>(`${this.brokeragesURLfindId}${id}`).pipe(take(1));
  }

  createBrokerage(request: RequestCreateBrokerage): Observable<Brokerage> {
    return this.http.post<Brokerage>(this.brokeragesURLInsert, request);
  }

  private create(brokerage) {
    return this.http.post(this.brokeragesURLInsert, brokerage).pipe(take(1));
  }

  searchBrokerageName(nome: string) {
    return this.http.get<Brokerage[]>(this.brokeragesURLfindName + nome)
        .pipe(
            delay(1000),
            tap(console.log),
            catchError((err, caught) => err)
        );
  }

  getBrokerageName(name: string): Observable<any> {
    return this.http.get(`${this.brokeragesURLfindName}${name}`);
  }

  getBrokerageById(id: number): Observable<Brokerage> {
    const url = `${this.brokeragesURLfindId}${id}`;
    return this.http.get<Brokerage>(url).pipe(
        tap(_ => console.log(`fetched BrokerageB id=${id}`)),
        catchError(this.handleError<Brokerage>(`getBrokerageById id=${id}`))
    );
  }

  update(id, data) {
    return this.http.put(`${this.brokeragesURLPut}/${id}`, data);
  }

  updateBrokerage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.brokeragesURLPut}${id}`, value);
 }
  get(id) {
    return this.http.get(`${this.brokeragesURLfindId}/${id}`);
  }
}
