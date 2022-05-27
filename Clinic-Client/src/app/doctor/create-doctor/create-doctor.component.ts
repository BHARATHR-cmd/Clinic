import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { CreateDoctorService } from './create-doctor.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  
  constructor(private createDoctorService:CreateDoctorService,private router: Router){}
  adddoctorForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
    age:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    speciality:new FormControl('',[Validators.required]),
  })
  
  ngOnInit(): void {
  }
  gotoList() {
    this.router.navigate(['/doctor/list']);
  }
  public onAddDoctor(adddoctorForm:FormGroup): void {
    this.createDoctorService.addDoctor(adddoctorForm.value).subscribe(
      (response: Doctor) => {
        console.log(response);
        adddoctorForm.reset();
        this.gotoList();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        adddoctorForm.reset();
      }
    );
  }
}
