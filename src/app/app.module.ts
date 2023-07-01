import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AwesomeComponentComponent } from './awesome-component/awesome-component.component';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, AwesomeComponentComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AwesomeComponentComponent, { injector });
    customElements.define('awesome-component', el);
  }
  ngDoBootstrap() {}
}
