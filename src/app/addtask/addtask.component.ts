import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { TaskdataService } from '../service/taskdata.service';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  addTaskForm: FormGroup;
  submitted = false;
  taskData:Array<any>;

  constructor(private formBuilder: FormBuilder, private router:Router, private taskDataService:TaskdataService ) {}

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      descriptionOfTask: ['', Validators.required]
    }); 
    this.getTasksList();

  }

  getTasksList() {
    this.taskDataService.getTaskList().subscribe(
      (task:any) => {
         this.taskData = task;
      },
      err => console.log(err)
    );
  }

  // convenience getter for easy access to form fields
  get f() { return this.addTaskForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addTaskForm.invalid) {
        return;
    }
    this.addNewTask(this.addTaskForm);
  } 

  addNewTask(obj){
    let lastTaskID = this.taskData[this.taskData.length - 1];
    let newId = lastTaskID.id + 1;
    let newTask= {
      "id": newId,
      "userId": 1,
      "title": obj.value.descriptionOfTask,
      "completed": false,      
    };
    this.taskDataService.addTask(newTask).subscribe(
      (data:any) =>  this.router.navigate(['viewtask']),
      err => console.log(err)
    );

  }

}
