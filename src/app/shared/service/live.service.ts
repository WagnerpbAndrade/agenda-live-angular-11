import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageble } from '../models/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
 
  apiUrl = "http://localhost:8080/lives";

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithflag(flag: string): Observable<ResponsePageble> {
    return this.httpClient.get<ResponsePageble>(this.apiUrl + "?flag=" + flag);
  }
}
