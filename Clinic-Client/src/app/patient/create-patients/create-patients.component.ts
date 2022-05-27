import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
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
  public doctors!: Doctor[];
  public doctor! :Doctor;
  public patient!:Patient;
  addForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z]+\s)*[a-zA-Z]+$')]),
dateOfVisited:new FormControl('',[Validators.required]),
    visitedDoctor:new FormControl('',[Validators.required]),
    prescription:new FormControl('',[Validators.required]),
  })
  constructor(private route: ActivatedRoute,private router: Router,private createPatientService:CreatePatientsService){}

  selecteddoctor?: Doctor;
onSelect(doctor: Doctor): void {
  this.selecteddoctor = doctor;
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
    this.router.navigate(['/patients/list']);
  }
// #########################################################################
  public onAddPatient(addForm:FormGroup): void {

    this.createPatientService.addPatient(addForm.value).subscribe(
      (response: Patient) => {
        this.gotoList();
        console.log(response);
        addForm.reset();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();

      }
    );
  }


}
