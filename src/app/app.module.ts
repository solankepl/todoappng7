import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { AddtaskComponent } from './container/component/addtask/addtask.component';
import { ViewtaskComponent } from './container/component/viewtask/viewtask.component';
import { ByfieldPipe } from './shared/byfield.pipe';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    AddtaskComponent,
    ViewtaskComponent,
    ByfieldPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
