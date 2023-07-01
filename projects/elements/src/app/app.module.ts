import { DoBootstrap, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwesomeComponentComponent } from '@app/app/awesome-component/awesome-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AwesomeComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AwesomeComponentComponent],
  exports: [AwesomeComponentComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const el = createCustomElement(AwesomeComponentComponent, { injector });
    customElements.define('awesome-component', el);
  }
  ngDoBootstrap() {}
}
