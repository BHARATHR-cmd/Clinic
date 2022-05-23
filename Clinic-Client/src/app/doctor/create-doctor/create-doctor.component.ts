import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../doctor';
import { CreateDoctorService } from './create-doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  
  constructor(private createDoctorService:CreateDoctorService){}
  ngOnInit(): void {
  }
  public onAddDoctor(addForm: NgForm): void {
    // document.getElementById('add-doctor-form').click();
    this.createDoctorService.addDoctor(addForm.value).subscribe(
      (response: Doctor) => {
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
