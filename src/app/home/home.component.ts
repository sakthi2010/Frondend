import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myimage:string="assets/images.jpg"

  constructor(
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.getUsers();
  }
  // url="./assets/images.jpg"

  getUsers(){
    // this.http.get('http://localhost:3000/api/user').subscribe(res=>{
    //   console.log("res users ",res);
    // })
  }

}
