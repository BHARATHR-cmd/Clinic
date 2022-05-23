import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from 'src/app/doctor/doctor';
import { Patient } from '../Patient';
import { CreatePatientsService } from './create-patients.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-patients',
  templateUrl: './create-patients.component.html',
  styleUrls: ['./create-patients.component.css']
})
export class CreatePatientsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private createPatientService:CreatePatientsService){}


  public doctors!: Doctor[];
  public doctor! :Doctor;
  public patient!:Patient;

  
//  selected(){
//   //  this.visiteddoctor={
//   //   newid:this.doctor.id=10001,
//   //   newname: this.doctor.name.toString(),
//   //   newage: Number(this.doctor.age.toString()),
//   //   newgender: this.doctor.gender.toString(),
//   //   newspeciality: this.doctor.speciality.toString(),
//   //   newnumberOfPatients: Number(this.doctor.numberOfPatients.toString()),}
//   this.visiteddoctor=this.doctor
//     alert(this.visiteddoctor)
  
// }
// selected(e:any){
//   // const obj =e.target.value
//   // for(let value in obj ){
//   //   console.log(value)
//   // }
  
//   alert(JSON.stringify(e.target.value.Object)
//   );
// }
selectedHero?: Doctor;
onSelect(doctor: Doctor): void {
  this.selectedHero = doctor;
}
  
  ngOnInit(): void {
    this.getDoctors();
  }
  public getDoctors(): void {
    this.createPatientService.getDoctors().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  gotoList() {
    this.router.navigate(['/doctor/list']);
  }

// #########################################################################
  public onAddPatient(addForm: NgForm): void {
  // document.getElementById('add-doctor-form').click();
  console.log(JSON.stringify(addForm.value))
//   for(var property in addForm.value.doctor ) {
//     alert(property + "=" + addForm.value.doctor[property]);
// }
  // addForm.value.visitedDoctor=this.selectedHero;
  // console.log(JSON.stringify(addForm.value))

    this.createPatientService.addPatient(addForm.value).subscribe(
      (response: Patient) => {
        this.gotoList();
        console.log(response);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
