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
  signup: any;
  user: any;

  constructor(private _http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.user = {
      employeeId: ''
    }
  }
  ngOnInit(): void {
  }
    

    // showToastr(){
    //   this.toastr.success('some messages', 'titile');
    // }
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
          "startDate": this.user.startDate,
          "endDate": this.user.endDate,
          "typeOfLeave": this.user.typeOfLeave,
          "reason": this.user.reason,
        }).subscribe(
          data => {
            if (data.statusCode == "201" || data.statusCode == "200") {
              this.toastr.success('leave applied successful');
              this.router.navigate(['login']);
            } else (data.statusCode == "500"); {
              this.toastr.error('leave applied already , choose different dates');
            }
          });

    }
}