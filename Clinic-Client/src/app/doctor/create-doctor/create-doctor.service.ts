import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor';

@Injectable({
  providedIn: 'root'
})
export class CreateDoctorService {

  public apiServerUrl="http://localhost:8080/api/v1";

  constructor(private http:HttpClient) { }

  
  public addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.apiServerUrl}/doctors/add`, doctor);
  }
}
