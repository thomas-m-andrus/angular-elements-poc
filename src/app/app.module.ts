import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppModule as SecondAppModule} from '../../projects/elements/src/app/app.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SecondAppModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
