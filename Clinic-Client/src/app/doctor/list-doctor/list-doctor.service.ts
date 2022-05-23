import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class ListDoctorService {

  public apiServerUrl="http://localhost:8080/api/v1";

  constructor(private http: HttpClient){}
    public getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctors/get`);
  }
}
