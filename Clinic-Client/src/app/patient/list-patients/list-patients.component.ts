import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmptyError } from 'rxjs';
import { Patient } from '../Patient';
import { ListPatientsService } from './list-patients.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {

  public patients!: Patient[];

  constructor(private route: ActivatedRoute,private router: Router,private patientService:ListPatientsService) { }
  pname:string="";
  ngOnInit(): void {
    this.getPatients();
  }
  gotoList() {
    this.router.navigate(['/patients/list']);
  }
 
  Search(data: string){
    this.patients=this.patients.filter(res=>{
      return res.name.toLowerCase().match(this.pname.toLowerCase());
      
    });
  }
  public getPatients(): void {
    this.patientService.getPatients().subscribe(
      (response: Patient[]) => {
        this.patients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
