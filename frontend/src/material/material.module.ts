import {NgModule} from "@angular/core";
import {MatButtonModule, MatCardModule, MatExpansionModule, MatListModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatListModule
  ],
})
export class MaterialModule { }
