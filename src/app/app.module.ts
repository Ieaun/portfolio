import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { MastersComponent } from './masters/masters.component';
import { BachelorsComponent } from './bachelors/bachelors.component';
import { IndustryComponent } from './industry/industry.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    MastersComponent,
    BachelorsComponent,
    IndustryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
