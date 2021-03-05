import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getLogin(data){
    return this.http.post('http://localhost:3000/api/login',data);
  }

  uploadFiles(data) {
    const url = 'http://localhost:3000/upload';
    const payload = new FormData();
    console.log("data ",data);
    // data.files.forEach(data.files, (item) => {
      payload.append('files',data.files[0]);
    // });
    return this.http.post(url, payload);
  }
}
