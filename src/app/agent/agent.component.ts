import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  filesList : any =[];

  constructor(
  private loginService : LoginServiceService){ }

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


