import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
