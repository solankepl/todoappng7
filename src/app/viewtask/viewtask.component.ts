import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../service/taskdata.service';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit {
  private taskData:Array<any>;
  constructor(private taskDataService:TaskdataService) { }

  ngOnInit() {
    this.getIssuesList();
  }

  getIssuesList() {
    this.taskDataService.getTaskList().subscribe(
      (task:any) => {
         this.taskData = task;
      },
      err => console.log(err)
    );
  }

}
