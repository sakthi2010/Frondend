import { Component, OnInit, Inject } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import {ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  userData : any = [];
  uploadedFiles : any=[];
  uploadForm : FormGroup;
    submitted = false;
  jobs : any =[];
  @ViewChild('closebutton') closebutton;
  constructor(public dialogRef: MatDialogRef<UploadDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = [],private loginService : LoginServiceService,private fb : FormBuilder,private service : LoginServiceService,
    private toastr:ToastrService,public dialog: MatDialog) { }

  ngOnInit(){
    console.log("data type ",this.data);
     this.uploadForm=this.fb.group({
    files : ['',Validators.required],
    name: ['', Validators.required],
   phone: ['', Validators.required],
   email: ['', Validators.required],
    type : [this.data.type]
  }
  )}

  onFileSelected(event) {
       this.uploadedFiles = []
    if (event.target.files.length > 0) {
      const files = event.target.files;
      this.uploadForm.get('files').setValue(files);
      console.log("uploadform ",this.uploadForm.value);
    }
  }
  
  uploadFiles(){
    console.log("uploadfiles ");
    if(this.uploadForm.value.name=="" || this.uploadForm.value.name==undefined){
      this.toastr.warning('Please enter all the values to submit!');
    }
    if(!this.uploadForm.valid){
      this.toastr.warning('Please enter all the values to submit!');
      return false;
    }
    console.log(this.uploadForm.value.files);
    let file = this.uploadForm.value;
    this.service.uploadFiles(file).subscribe(res=>{
      console.log("upload res ",res);
      this.dialogRef.close();
    })
  }

  closePopup(){
    this.dialogRef.close();
  }

}
