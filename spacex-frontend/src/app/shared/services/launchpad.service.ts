import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launchpad } from '../models/launchpad.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filters } from '../models/filters.model';

const BASE_URL = "http://localhost:8080/launchpads";

@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {

  constructor(private httpClient: HttpClient) { }

  fetchAllLaunchpads(pageNumber: number, records: number): Observable<Launchpad[]> {
    return this.httpClient.get<Launchpad[]>(`${BASE_URL}/fetchAll/${pageNumber}/${records}`);
  }

  fetchLaunchpad(id: string): Observable<Launchpad> {
    return this.httpClient.get<Launchpad>(`${BASE_URL}/fetch/${id}`);
  }

  fetchFilteredLaunchpads(filters: Filters): Observable<Launchpad[]> {
    const params = new HttpParams()
      .set('pageNumber', (filters.pageNumber ? (parseInt(filters.pageNumber)-1).toString() : '0') as string || '0')
      .set('records', filters.records as string || '5')
      .set('name', filters.name || '')
      .set('region', filters.region || '');
      console.log(params);

    return this.httpClient.get<Launchpad[]>(`${BASE_URL}/fetchByFilter`, { params });
  }
}
