import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   constructor(
    private router: Router,
    private loginService : LoginServiceService
    ) { }

username: string;
password: string;

  ngOnInit() {
  }

  login() : void {
    var postData={
      username : this.username,
      password : this.password
    }
    this.loginService.getLogin(postData).subscribe(res=>{
      console.log("resposne ",res);
      if(res['status']=='Success'){
          this.router.navigate(['/home']);
      }
    })
    console.log("username ",this.username);

  }
  }
