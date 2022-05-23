import {  HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { SelectDoctorService } from './select-doctor.service';

@Component({
  selector: 'app-select-doctor',
  templateUrl: './select-doctor.component.html',
  styleUrls: ['./select-doctor.component.css']
})
export class SelectDoctorComponent implements OnInit {
  public doctors: Doctor[]=[];
  public Singledoctor! :Doctor;

  constructor(private doctorSelectService:SelectDoctorService) {   
 }
    newname:string="";
    newage:number=0;
    newgender:string="";
    newspeciality:string="";
    newnumberOfPatients:number=0;
    toggle:boolean=true;
 selected(){
  this.newname=this.Singledoctor.name;
  this.newage=this.Singledoctor.age;
  this.newgender=this.Singledoctor.gender;
  this.newspeciality=this.Singledoctor.speciality;
  this.newnumberOfPatients=this.Singledoctor.numberOfPatients;
  this.toggle=false;
 }

  
  ngOnInit(): void {
    this.getDoctors();
  }
  public getDoctors(): void {
    this.doctorSelectService.getDoctors().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
        // console.log(this.doctors[0].age)
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

}
