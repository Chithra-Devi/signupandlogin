import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  user = {
    'username': '',
    'password': ''
  };
    constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
}
  ngOnInit(): void {
  }

  login() {
    console.log("Clicking");
    console.log("Clicking", this.user.username);
    console.log("Clicking", this.user.password);

    if ((this.user.username == '') || (this.user.password == '')) {
      this.toastr.warning('please enter the correct username and password');
    }
    else {
      this.http.post<any>('http://localhost:8080/psa/loginService',
        {
          "username": this.user.username,
          "password": this.user.password
        }).subscribe(
          data => {

            if (data.statusCode == "201") {
              this.toastr.success('login successful');
              this.router.navigate(['welcome']);
            }
            else {

              this.toastr.error('login unsuccessful');



              console.log("Login Credentials");
            }
             console.log("Response", data);

          })

    }

  }
}