import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'



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

  constructor(private http: HttpClient, private router: Router) {
    // this.user.username = 'Hello';
    // this.user.password = 'Hello';
   }

  //  constructor(private router: Router) {}


  ngOnInit(): void {
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
          if(data.statusCode == "201"){
            this.router.navigate(['welcome']);
          }
          else{
            console.log("Login Credentials")
          }
          console.log("Response", data);
          // we  have to check for response then redirect  you have to use router need to display via toast message 
        })
  }
}
