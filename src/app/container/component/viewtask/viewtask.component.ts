import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { IAppState } from '../../store/store';
import { REMOVE_ALL_TODOS, REMOVE_TODO, TOGGLE_TODO  } from '../../actions/action';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent implements OnInit { 
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
    this.todos.subscribe(todos =>{
      todos = todos;
      console.log(todos);
    })
 //console.log(this.ngRedux.subscribe.call;
  }
  deleteAllTask() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }

  deleteTask(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }

  setComplatedTask(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }
}
