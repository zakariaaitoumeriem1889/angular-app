import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:8081/rest-contact/api/contacts';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  find(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // tslint:disable-next-line:ban-types
  create(contact: Object): Observable<Object> {
    return this.http.post(this.baseUrl, contact);
  }

  edit(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {
      responseType: 'text'
    });
  }
}
