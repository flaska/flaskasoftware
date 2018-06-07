import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FestkaExp, NclabExp} from "./content/definitions";

@NgModule({
  declarations: [
    NclabExp,
    FestkaExp
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NclabExp,
    FestkaExp
  ],
  providers: [],
  bootstrap: []
})
export class ExperienceModule { }
