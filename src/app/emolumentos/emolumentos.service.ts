import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Emolumentos, RequestCreateEmolumentos } from '../emolumentos/emolumentos.module';

@Injectable({
  providedIn: 'root'
})
export class EmolumentosService {

  public readonly emolumentosURListAll = `${environment.emolumentosURListAll}`;
  public readonly emolumentosURLfindName    = `${environment.emolumentosURLfindName}`;
  public readonly emolumentosURLfindId    = `${environment.emolumentosURLfindId}`;
  public readonly emolumentosURLInsert    = `${environment.emolumentosURLInsert}`;
  public readonly emolumentosURLPut = `${environment.emolumentosURLPut}`;

  constructor(private http: HttpClient) { }

  getEmolumentos(): Observable<Emolumentos> {
    return this.http.get<Emolumentos>(this.emolumentosURListAll);
  }

  get(id) {
    return this.http.get(`${this.emolumentosURLfindId}${id}`);
  }

  createEmolumentos(request: RequestCreateEmolumentos): Observable<Emolumentos> {
    return this.http.post<Emolumentos>(this.emolumentosURLInsert, request);
  }

  update(id, data) {
    return this.http.put(`${this.emolumentosURLPut}${id}`, data);
  }

  updateStatus(id, data) {
    return this.http.put(`${this.emolumentosURLPut}${id}`, data);
  }
}
