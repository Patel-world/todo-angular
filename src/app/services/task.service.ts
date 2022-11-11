import { Task } from 'src/app/Task';
import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
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
export class TaskService {
  private apiUrl='https://todo-rest-ng.herokuapp.com/todos/'

  constructor(private http:HttpClient) { }

  getTasks():Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url=`${this.apiUrl}delete/${task.id}/`
    return this.http.delete<Task>(url)
  }
  toggleReminder(task:Task):Observable<Task>{
    const url=`${this.apiUrl}update/${task.id}/`
    console.log(url)
    return this.http.put<Task>(url,task, httpOptions)
  }

  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task, httpOptions)
  }
}
