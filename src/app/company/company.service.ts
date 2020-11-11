import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company, RequestCreateCompany} from './company.module';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public readonly companyURListAll = `${environment.companyURListAll}`;
  public readonly companyURLfindName    = `${environment.companyURLfindName}`;
  public readonly companyURLfindId    = `${environment.companyURLfindId}`;
  public readonly companyURLInsert    = `${environment.companyURLInsert}`;
  public readonly companyURLPut = `${environment.companyURLPut}`;

  constructor(private http: HttpClient) { }

  getCompany(): Observable<Company> {
    return this.http.get<Company>(this.companyURListAll);
  }

  get(id) {
    return this.http.get(`${this.companyURLfindId}${id}`);
  }

  createCompany(request: RequestCreateCompany): Observable<Company> {
    return this.http.post<Company>(this.companyURLInsert, request);
  }

  update(id, data) {
    return this.http.put(`${this.companyURLPut}${id}`, data);
  }

  updateStatus(id, data) {
    return this.http.put(`${this.companyURLPut}${id}`, data);
  }
}
