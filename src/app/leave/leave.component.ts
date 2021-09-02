import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  static subscribe: any;
  [x: string]: any;
  successMessage: string | undefined;
  title = 'leave';
 

  constructor(private _http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.user = {
      employeeId: ''
    }
  }
  ngOnInit(): void {
   
    this.user.typeOfLeave='Earned Leave';
   
    console.log("signup signup calling Before");
 
  }
    

  
    applyLeaveEmployee(){
     console.log("this.user",this.user);
     console.log("this.user");

    
    
  
      if (this.user.startDate === undefined || this.user.startDate == '') {
        this.toastr.error('Please select valid Start Date');
        return;
      }

      if (this.user.endDate === undefined || this.user.endDate == '') {
        this.toastr.error('Please select valid End Date');
        return;
      }
      if(this.user.typeOfLeave === undefined  || this.user.typeOfLeave == ''){
        this.toastr.error('Please select type of leave');
        return;
      }
      
      
      this._http.post<any>('http://localhost:8080/psa/applyLeave',
        {
          // {
          //   "employee":{
          //   "id":"455"
          //   },
          //   "startDate":"05-09-2021",
          //   "endDate":"06-09-2021",
          //   "typeOfLeave":"casual"
          //   },

          "employee": {
            "id":  localStorage.getItem('employeeId')
            
            
          },
         "startDate": this.user.startDate,
          "endDate": this.user.endDate,
          "typeOfLeave": this.user.typeOfLeave,
          
          
        }).subscribe(
          data => {
            if (data.statusCode === "201" || data.statusCode == "200") {
              this.toastr.success('leave applied successful');
            
            } else {
            }
            
          });

    }
}

function controller(arg0: string, arg1: (string | (($scope: any) => void))[]) {
  throw new Error('Function not implemented.');
}