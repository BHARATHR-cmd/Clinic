import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../Patient';

@Injectable({
  providedIn: 'root'
})
export class ListPatientsService {

  public apiServerUrl="http://localhost:8080/api/v1";

  constructor(private http: HttpClient){}
    public getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiServerUrl}/patients/get`);
  }
}
