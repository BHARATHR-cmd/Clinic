import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
import { CreatePatientsComponent } from './patient/create-patients/create-patients.component';
import { SelectDoctorComponent } from './doctor/select-doctor/select-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    CreateDoctorComponent,
    ListDoctorComponent,
    PatientComponent,
    ListPatientsComponent,
    CreatePatientsComponent,
    SelectDoctorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
