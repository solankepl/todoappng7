import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  //private taskListUrl = '//jsonplaceholder.typicode.com/todos';
  private taskListUrl = '//5c83523bafa21a00143000ef.mockapi.io/api/task';
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

  updateTask(taskId,  updateTask) {
    let editTaskURL = `${this.taskListUrl}/${taskId}`; 
    return this._http.put(editTaskURL, updateTask, this.httpOptions);
  }

  deleteTask(taskId) {
    let deleteTaskURL = `${this.taskListUrl}/${taskId}`;
    return this._http.delete(deleteTaskURL);
  }
  
}

