import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // var $ : any;
  // var document: any;

  constructor(public router: Router) { }

  ngOnInit(): void {
    // $('button').click(function () {
    //   alert("jQuery Works!");
    // });
  }

  login(){
    this.router.navigateByUrl('/home');
  };

  register(){
    this.router.navigateByUrl('/register');
  }


}
