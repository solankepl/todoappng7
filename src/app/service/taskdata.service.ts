import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskdataService {

private taskListUrl = '//jsonplaceholder.typicode.com/todos';
  private httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
  };

  constructor(private _http: HttpClient) { }

  getTaskList() {
      return this._http.get(this.taskListUrl);
  }

  addTask(obj) {
    return this._http.post(this.taskListUrl, obj, this.httpOptions);
  }
  
}

