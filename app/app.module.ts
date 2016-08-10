import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { DjComponent }  from './dj/dj.component';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DjComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
