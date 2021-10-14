import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  // url de prueba hasta que este el real de la api 
  url2 =environment.urlHost;

  constructor(private http: HttpClient,) { }


  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(this.url2  + '/' + endpoint )
  }


  getId<T>(endpoint: string, id: number): Observable<T> {
    const url = this.url2  + '/' + endpoint  + '/' + id;
    return this.http.get<T>(url)
  }

  post<T>(endpoint: string, item: T): Observable<T>{
    const url = this.url2  + '/' + endpoint;
    return this.http.post<T>(url, item)
  }

  put<T>(endpoint: string, item: T, id: number): Observable<T>{
    const url = this.url2  + '/' + endpoint + '/' + id;
    return this.http.put<T>(url, item)  
  }

  delete(endpoint: string, id: number) :  Observable<{}>{
    const url = this.url2  + '/' + endpoint + '/' + id;
    return this.http.delete(url)  
  }
  
}
