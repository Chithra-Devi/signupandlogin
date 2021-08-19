import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  successMessage: string | undefined;
  title = 'signup';

  constructor() { }

  ngOnInit(): void {
    // this.register();
  }
  register(){
    // console.log("Hello Message");
    // console.log(this.register)
    // this.successMessage = "Successfully Registered..."
  }
  }

