import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from './services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  userData : any = [];
  uploadedFiles : any=[];
  uploadForm : FormGroup;
//   userData = {createdAt: undefined,
//   firstName:undefined,
//   hash: undefined,
//   id: undefined,
//   lastName:undefined,
//   password: undefined,
//   updatedAt: undefined,
//   username:undefined,
// };
@ViewChild('closebutton') closebutton;

  constructor(private fb : FormBuilder,private service : LoginServiceService){}

  ngOnInit(): void {
    this.getUserdata();
    this.uploadForm=this.fb.group({
      files : ['',Validators.required]
    })
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
    console.log(this.uploadForm.value.files);
    let file = this.uploadForm.value;
    this.service.uploadFiles(file).subscribe(res=>{
      console.log("upload res ",res);
      // this.onClose();
    })
  }

//   @ViewChild('fileInput') fileInput: ElementRef;
//   fileAttr = 'Choose File';
//   uploadFileEvt(imgFile: any) {
//     if (imgFile.target.files && imgFile.target.files[0]) {
//       this.fileAttr = '';
//       Array.from(imgFile.target.files).forEach((file: File) => {
//         this.fileAttr += file.name + ' - ';
// });

//       // Reset if duplicate image uploaded again
//       this.fileInput.nativeElement.value = "";
//     } else {
//       this.fileAttr = 'Choose File';
//     }
//   }
 
  getUserdata(){
    this.userData= localStorage.getItem('user_data');
    console.log("userdata ",this.userData);
  }

 
}