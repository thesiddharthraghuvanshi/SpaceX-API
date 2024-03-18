import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Launchpad } from '../models/launchpad.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Filters } from '../models/filters.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadService {
  BASE_URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  fetchAllLaunchpads(pageNumber: number, records: number): Observable<Launchpad[]> {
    return this.httpClient.get<Launchpad[]>(`${this.BASE_URL}/fetchAll/${pageNumber}/${records}`).pipe(
      catchError((error) => {
        console.error('fetchAllLaunchpads API Error:', error);
        return throwError('Error Occured while fetching all Launchpads');
      })
    );
  }

  fetchLaunchpad(id: string): Observable<Launchpad> {
    return this.httpClient.get<Launchpad>(`${this.BASE_URL}/fetch/${id}`).pipe(
      catchError((error) => {
        console.error('fetchLaunchpad API Error:', error);
        return throwError('Error Occured while fetching a Launchpad');
      })
    );
  }

  fetchFilteredLaunchpads(filters: Filters): Observable<Launchpad[]> {
    const params = new HttpParams()
      .set('pageNumber', (filters.pageNumber ? (parseInt(filters.pageNumber) - 1).toString() : '0') as string || '0')
      .set('records', filters.records as string || '5')
      .set('name', filters.name || '')
      .set('region', filters.region || '');

    return this.httpClient.get<Launchpad[]>(`${this.BASE_URL}/fetchByFilter`, { params }).pipe(
      catchError((error) => {
        console.error('fetchFilteredLaunchpads API Error:', error);
        return throwError('Error Occured while fetching filtered Launchpads');
      })
    );
  }
}
