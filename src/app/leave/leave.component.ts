import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  title = 'leave';
  signup: any;
  user: any;

  constructor() { }
  

  ngOnInit(): void {


    
  }

  test(){
    console.log("Method calling here");
  }

}