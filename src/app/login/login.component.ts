import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: string = 'welcome to login page';
  secondData: string = 'Enter the username';
  uname: any = '';
  psw: any = '';

  constructor(private ds:DataService) { }
  ngOnInit(): void {}
  login() {

  this.ds.serviceMethod("Hello")

    // alert(this.ds.serviceData)

    // this.uname=a.value
    // this.psw=b.value
    // alert(`${this.uname} & ${this.psw}`);
  }
//   accessUname(event: any) {
//     this.uname = event.target.value;
//     console.log(this.uname);
//   }
//   accessPSW(event: any) {
//     this.psw = event.target.value;
//     console.log(this.psw);
//   }
}
