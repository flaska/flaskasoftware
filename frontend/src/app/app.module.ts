import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from "../material/material.module";
import {CubeComponent} from "./cube/cube.component";
import {PagesComponent} from "./pages/pages.component";
import {MissionPageComponent} from "./pages/mission/mission.page.component";

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    PagesComponent,
    MissionPageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
