import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import {Acoes, RequestCreateAcoes} from '../acoes/acoes.module';

@Injectable({
  providedIn: 'root'
})
export class AcoesService {

  public readonly acoesURListAll = `${environment.acoesURListAll}`;
  public readonly acoesURLfindName    = `${environment.acoesURLfindName}`;
  public readonly acoesURLfindId    = `${environment.acoesURLfindId}`;
  public readonly acoesURLInsert    = `${environment.acoesURLInsert}`;
  public readonly acoesURLPut = `${environment.acoesURLPut}`;

  constructor(private http: HttpClient) { }

  getAcoes(): Observable<Acoes> {
    return this.http.get<Acoes>(this.acoesURListAll);
  }

  get(id) {
    return this.http.get(`${this.acoesURLfindId}${id}`);
  }

  createEmolumentos(request: RequestCreateAcoes): Observable<Acoes> {
    return this.http.post<Acoes>(this.acoesURLInsert, request);
  }

  update(id, data) {
    return this.http.put(`${this.acoesURLPut}${id}`, data);
  }

  updateStatus(id, data) {
    return this.http.put(`${this.acoesURLPut}${id}`, data);
  }
}
