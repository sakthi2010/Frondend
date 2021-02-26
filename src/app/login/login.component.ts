import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

   constructor(
    private router: Router,
    private loginService : LoginServiceService
    ) { }

username: string;
password: string;

  ngOnInit() {
    this.loginForm=new FormGroup({
      username : new FormControl(''),
      password : new FormControl('')
    })
  }

  login() : void {
    // var postData={
    //   username : this.username,
    //   password : this.password
    // }
    console.log("login form ",this.loginForm.value);
    this.loginService.getLogin(this.loginForm.value).subscribe(res=>{
      console.log("resposne ",res);
      if(res['status']=='Success'){
          this.router.navigate(['/home']);
      }
    })
    console.log("username ",this.username);

  }
  }
