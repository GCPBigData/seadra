import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestCreateWallet, Wallet } from './wallet.module';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public readonly walletURListAll = `${environment.walletURListAll}`;
  public readonly walletURLfindName    = `${environment.walletURLfindName}`;
  public readonly walletURLfindId    = `${environment.walletURLfindId}`;
  public readonly walletURLInsert    = `${environment.walletURLInsert}`;
  public readonly walletURLPut = `${environment.walletURLPut}`;

  constructor(private http: HttpClient) { }

  getWallet(): Observable<Wallet> {
    return this.http.get<Wallet>(this.walletURListAll);
  }

  get(id) {
    return this.http.get(`${this.walletURLfindId}${id}`);
  }

  createWallet(request: RequestCreateWallet): Observable<Wallet> {
    return this.http.post<Wallet>(this.walletURLInsert, request);
  }

  update(id, data) {
    return this.http.put(`${this.walletURLPut}${id}`, data);
  }
}
