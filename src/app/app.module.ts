import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { DeletedtaskComponent } from './deletedtask/deletedtask.component';
import { ByfieldPipe } from './shared/byfield.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AddtaskComponent,
    ViewtaskComponent,
    DeletedtaskComponent,
    ByfieldPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
