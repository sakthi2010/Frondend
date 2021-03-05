import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  getLogin(data){
    return this.http.post('https://niranaapi.nstore.in/api/login',data);
  }

  uploadFiles(data) {
    const url = 'https://niranaapi.nstore.in/upload';
    const payload = new FormData();
    console.log("data ",data);
    // data.files.forEach(data.files, (item) => {
      payload.append('files',data.files);
    // });
    return this.http.post(url, payload);
  }
}
