import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = "welcome to login page";
  secondData: string = "Enter the username";
uname:any=""
psw:any=""
  constructor() {}

  ngOnInit(): void {
  
  }

  login(){
    alert('login clicked')
  }

accessUname(event:any){
this.uname=event.target.value
console.log(this.uname);


}

accessPSW(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  

}

}
