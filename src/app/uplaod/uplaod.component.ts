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
  updateDocStatus(data,status){
  var post_data={
    id : data.id,
    doc_status : status
  }
  console.log("updatstatus ",post_data);
  this.loginService.updateDocumentStatus(post_data).subscribe((res)=>{
    console.log("files ",res);
    this.getFiles();
  })
}
 deleteDocStatus(data){
    var delete_data={
      id : data
      
    }
    console.log("deletestatus ",delete_data);
    this.loginService.deleteDocumentStatus(delete_data).subscribe((res)=>{
      console.log("files ",res);
      this.getFiles();
    })
}
}
