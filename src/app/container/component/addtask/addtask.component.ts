import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import {Router} from "@angular/router";
//import { TaskdataService } from '../../service/taskdata.service';

import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store/store';
import { ADD_TODO} from '../../actions/action';
import { ITodo } from '../../interface/todo';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  addTaskForm: FormGroup;
  submitted = false;
  @select() todos;
  model: ITodo = {
    id: 0,
    userid: 1,
    description: "",    
    completed: false 
  };

  constructor(private formBuilder: FormBuilder, private router:Router, private ngRedux: NgRedux<IAppState> ) {}

  ngOnInit() {
    this.addTaskForm = this.formBuilder.group({
      description: ['', Validators.required]
    }); 
   
  }

   // convenience getter for easy access to form fields
  get f() { return this.addTaskForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.addTaskForm.invalid) {
        return;
    }
    this.model.description = this.addTaskForm.value.description;
    console.log(this.todos);
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
    this.router.navigate(['viewtask']);
  } 
}
