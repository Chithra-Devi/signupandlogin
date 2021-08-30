import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { Router, Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
@Component({
 
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']

})
export class SignupComponent implements OnInit {
  static subscribe: any;
  [x: string]: any;
  successMessage: string | undefined;
  title = 'signup';
 
  selectedObject: AudioContextLatencyCategory = "balanced";
  categories=[
    { id: 0, jobRole: 'Tester' },
    { id: 1, jobRole: 'QualityEngineer' },
    { id: 2, jobRole: 'Developer' },
    { id: 3,jobRole: 'DataAnalyst' },
    {id: 4, jobRole: 'AssociateConsultant'},
    {id: 5, jobRole: 'Others'}
  ];

  selectedCat = this.categories[0];
  signup: any;
  user: any;

  constructor(private _http: HttpClient,private router: Router,private toastr: ToastrService) {
    this.user = {
       employeeId: ''
     }
 }

   
showToastr(){
  this.toastr.success('some messages', 'titile');
}
 
 

  registerEmployee(){
 
    if(this.user.employeeId === undefined || this.user.employeeId== ''){
      this.toastr.error('Please enter valid employeeId');
      return;
    }
    if(this.user.name === undefined || this.user.name == ''){
      this.toastr.error('Please enter user name');
      return;
    }
   
   
    if(this.user.Password === undefined  || this.user.Password == ''){
      this.toastr.error('Please Enter password');
      return;
    }
    if(this.user.cPassword === undefined  || this.user.cPassword == '') {
    this.toastr.error('Please Enter confirm password');
      return;
    }
    if(this.user.Password !== this.user.cPassword) {
      this.toastr.error('Password should be match');
      return;
    }
    if(this.user.emailId === undefined  || this.user.emailId == '')
    {
      this.toastr.error('Please enter valid email');
      return;
    }
    if(this.user.Date === undefined  || this.user.Date == ''){
      this.toastr.error('Please select valid date');
      return;
    }
    if(this.user.ProjectID === undefined  || this.user.ProjectID == ''){
      this.toastr.error('Please enter valid ProjectId');
      return;
    }
    if(this.user.projectName === undefined  || this.user.projectName == ''){
      this.toastr.error('Please enter valid ProjectName');
      return;
    }
    if(this.selectedCat.jobRole === undefined  || this.selectedCat.jobRole == ''){
      this.toastr.error('Please enter valid JobRole');
      return;
    }
    if(this.user.gender === undefined  || this.user.gender == ''){
      this.toastr.error('Please enter valid Gender');
      return;
    }


    this._http.post<any>('http://localhost:8080/psa/registerEmployee',
    {
      "id": {
        "employeeId": this.user.employeeId
      },
      "username": this.user.name,
      "email": this.user.emailId,
      "doj": this.user.Date,
      "password": this.user.Password,
      "projectId": this.user.ProjectID,
      "projectName": this.user.projectName,
      "jobRole": this.selectedCat.jobRole,
      "gender":this.user.gender,
    }).subscribe(
      data => {
        if(data.statusCode == "201" || data.statusCode == "200") {
          this.toastr.success('register successful,  click back to login');
          this.router.navigate(['login']);
        } else if( data.statusCode == "500"){
          this.toastr.error('user already exists, click back to login');
          this.router.navigate(['login']);
         
        }
        else 
        {
          this.toastr.error('register unsuccessful');
          
        }

      });

  }

  ngOnInit(): void {
    this.user.gender='female';
   
    console.log("signup signup calling Before");
 
  }

 
  }

function controller(arg0: string, arg1: (string | (($scope: any) => void))[]) {
  throw new Error('Function not implemented.');
}
 