import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
// https://niranaapi.nstore.in - live
// http://localhost:3000 - local

  getLogin(data){
    return this.http.post('https://niranaapi.nstore.in/api/login',data);
  }

  uploadFiles(data) {
    console.log(data);
    const url = 'https://niranaapi.nstore.in/upload';
    let payload:any = new FormData();
    payload.append('files', data.files[0]);
    payload.append('name', data.name);
    payload.append('email', data.email);
    payload.append('phone', data.phone);
    console.log("data payload-------> ",payload);
    // data.files.forEach(data.files, (item) => {
      // payload.append('files',data.files);
    // });
    return this.http.post(url, payload, {
      // headers: {
      //   'Content-Type': 'multipart/form-data'
      // }
      
    });
  }

  getUploadedFiles(){
    return this.http.get('https://niranaapi.nstore.in/api/getDocument');
  }

}
