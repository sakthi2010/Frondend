import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-uplaod',
  templateUrl: './uplaod.component.html',
  styleUrls: ['./uplaod.component.css']
})
export class UplaodComponent implements OnInit {

  filesList : any =[];

  constructor(
    private loginService : LoginServiceService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(){
    this.loginService.getUploadedFiles().subscribe((res)=>{
      console.log("files ",res);
      this.filesList=res;
    })
  }

}
