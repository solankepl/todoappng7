import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { DeletedtaskComponent } from './deletedtask/deletedtask.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AddtaskComponent,
    ViewtaskComponent,
    DeletedtaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
