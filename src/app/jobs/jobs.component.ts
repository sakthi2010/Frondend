import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginServiceService } from '../services/login-service.service';
import {ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  userData : any = [];
  uploadedFiles : any=[];
  uploadForm : FormGroup;
    submitted = false;
  jobs : any =[];
  @ViewChild('closebutton') closebutton;

  constructor(
    private loginService : LoginServiceService,private fb : FormBuilder,private service : LoginServiceService,
    private toastr:ToastrService,) { }

    ngOnInit(): void {
  this.discription();
  this.uploadForm=this.fb.group({
    files : ['',Validators.required],
    name: ['', Validators.required],
   phone: ['', Validators.required],
   email: ['', Validators.required],
  })
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.uploadForm.invalid) {
      return;
  }

  // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.uploadForm.value, null, 3));
}

onReset() {
  this.submitted = false;
  this.uploadForm.reset();
}
public onClose() {
  this.closebutton.nativeElement.click();
}

onFileSelected(event) {
  this.onClose();
  this.uploadedFiles = []
  if (event.target.files.length > 0) {
    const files = event.target.files;
    // const filenames = [];
    // let fileList: FileList = event.target.files;
    // let file: File = fileList[0];
    // console.log("onimage ",event);
    // _.forEach(files, (el) => {
    //   this.uploadedImages.push(el.name);
    // });
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
    // this.onClose();
  })
}

discription(){
  this.loginService.gettitle().subscribe((res)=>{
    console.log("files ",res);
    this.jobs=res;
  })
}

getUserdata(){
  this.userData= localStorage.getItem('user_data');
  console.log("userdata ",this.userData);
}

}
