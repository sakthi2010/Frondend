import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

   constructor(
     private toastr:ToastrService,
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
          this.router.navigate(['/upload']);
          let userData=JSON.stringify(res['data']['rows']);
          localStorage.setItem("user_data",userData);
      }
    }, 
    
        (err) => {
            this.toastr.error('Invalid username or password!');
            
    })
      console.log("username ",this.username);

  }
  }
