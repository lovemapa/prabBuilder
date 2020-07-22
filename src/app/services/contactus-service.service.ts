import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusServiceService {
    localserver="http://localhost:8081/sendMail"
    // localserver="http://3.14.176.224:8081/sendMail"
  constructor(public httpClient:HttpClient) { }

  sendMessageDataBase(sendmessageMOdal:any): Observable<any>{
    return this.httpClient.post(this.localserver,sendmessageMOdal)
  }
}
