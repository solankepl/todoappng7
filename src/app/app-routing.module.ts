import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { AddtaskComponent } from './addtask/addtask.component';

const appRoutes: Routes = [ 
  {
  path: 'viewtask',       
  children: [
      {
          path: 'addtask',    
          component: AddtaskComponent,
      },
      {
          path: '',    
          component: ContainerComponent,
      },
    ]
  },
  { path: '',   redirectTo: '/viewtask', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
