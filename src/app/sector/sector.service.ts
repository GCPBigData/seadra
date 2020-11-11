import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sector} from '../sector/sector.module';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  public readonly companyURListAllSector = `${environment.companyURListAllSector}`;

  constructor(private http: HttpClient) { }

  getSector(): Observable<Sector[]> {
    return this.http.get<Sector[]>(this.companyURListAllSector);
  }
}
