import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  user = {
    'username':'',
    'password':''
  };

  constructor(private http: HttpClient) {
    // this.user.username = 'Hello';
    // this.user.password = 'Hello';
   }


  ngOnInit(): void {
   
    // this.http.post<any>('http://localhost:8080/psa/loginService',
    //   {
    //     "username": "3456",
    //     "password": "string"
    //   }).subscribe(
    //     data => {
    //       console.log("Response", data);
    //     })
  }
  login(){
    console.log("Clicking");
    console.log("Clicking",this.user);
    this.http.post<any>('http://localhost:8080/psa/loginService',
      {
        "username": this.user.username,
        "password": this.user.password
      }).subscribe(
        data => {
          console.log("Response", data);
          // we  have to check for response then redirect  you have to use router need to display via toast message 
          
        })
  }
}
