import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ListDoctorComponent } from './doctor/list-doctor/list-doctor.component';
import { SelectDoctorComponent } from './doctor/select-doctor/select-doctor.component';
import { CreatePatientsComponent } from './patient/create-patients/create-patients.component';
import { ListPatientsComponent } from './patient/list-patients/list-patients.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {path:"doctor",component:DoctorComponent,children:[
    {path:"add",component:CreateDoctorComponent},
    {path:"list",component:ListDoctorComponent},
    {path:"select",component:SelectDoctorComponent},]},
  {path:"patients",component:PatientComponent,children:[
    {path:"add",component:CreatePatientsComponent},
    {path:"list",component:ListPatientsComponent},
  
  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
