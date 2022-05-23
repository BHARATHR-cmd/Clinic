import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { ListDoctorService } from './list-doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {
  public doctors!: Doctor[];

  constructor(private doctorService:ListDoctorService) { }

  ngOnInit(): void {
    this.getDoctors();
  }
  public getDoctors(): void {
    this.doctorService.getDoctors().subscribe(
      (response: Doctor[]) => {
        this.doctors = response;
        console.log(this.doctors);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
