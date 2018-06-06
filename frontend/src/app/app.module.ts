import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MaterialModule} from "../material/material.module";
import {CubeComponent} from "./cube/cube.component";
import {PagesComponent} from "./pages/pages.component";
import {MissionPageComponent} from "./pages/mission/mission.page.component";
import {CocktailPageComponent} from "./pages/cocktail/cocktail.page.component";
import {TechnologyPageComponent} from "./pages/technology/technology.page.component";
import {PricingPageComponent} from "./pages/pricing/pricing.page.component";
import {ExperiencePageComponent} from "./pages/experience/experience.page.component";
import {ContactPageComponent} from "./pages/contact/contact.page.component";
import {ExperienceLinkComponent} from "./pages/link/experience.link.component";

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    PagesComponent,
    MissionPageComponent,
    CocktailPageComponent,
    TechnologyPageComponent,
    PricingPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,

    ExperienceLinkComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
