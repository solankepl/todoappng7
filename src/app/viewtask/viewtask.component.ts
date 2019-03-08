import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../service/taskdata.service';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit {
  private taskData: Array<any>;
  private complatedTask: Array<any>;
  private pendingTask: Array<any>;
  private markaAsComplatedTask: Array<number> = new Array();
  constructor(private taskDataService: TaskdataService) { }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList() {
    this.taskDataService.getTaskList().subscribe(
      (task: any) => {
        this.taskData = task;
        this.filterTaskList();
      },
      err => console.log(err)
    );
  }

  filterTaskList() {
    this.complatedTask = this.taskData.filter(task => task.completed === true);
    this.pendingTask = this.taskData.filter(task => task.completed === false);
  }

setAllComplatedTask(evt, list){
  //this.pendingTask = this.taskData.map(task => task.completed = true);
  let setSelected = evt.target.checked
  
  list.forEach(function (task) {
           task.completed = setSelected;
  });
    
}

  setComplatedTask(evt, task) {
    if (evt.target.checked) {
      this.markaAsComplatedTask.push(task.id);
    } else {
      let index = this.markaAsComplatedTask.indexOf(task.id, 0);
      if (index > -1) {
        this.markaAsComplatedTask.splice(index, 1);
      }
    }
    task.completed = evt.target.checked;

  }

  markAsComplated() {
    this.filterTaskList();
    /*let selectedTaskArray = this.markaAsComplatedTask;
    this.taskData.forEach(function (task) {
      for (let i of selectedTaskArray) {
       if(task.id === i) {
           task.completed = true;
        }
      }
    });*/
  }

}
