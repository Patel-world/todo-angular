import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl='http://127.0.0.1:8000/todos/'

  constructor(private http:HttpClient) { }

  onLogin():Observable<string>{
    
    return this.http.get<string>(this.apiUrl)
  }
}
