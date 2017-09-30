import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
