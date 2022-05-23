import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/doctor/doctor';
import { Patient } from '../Patient';

@Injectable({
  providedIn: 'root'
})
export class CreatePatientsService {

  public apiServerUrl="http://localhost:8080/api/v1";

  constructor(private http:HttpClient) { }

  
  public addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiServerUrl}/patients/add`, patient);
  }
  public getDoctors(): Observable<Doctor[]> {
  return this.http.get<Doctor[]>(`${this.apiServerUrl}/doctors/get`);
}

}
