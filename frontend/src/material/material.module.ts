import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatExpansionModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
})
export class MaterialModule { }
