import { DoBootstrap, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwesomeComponentComponent } from '@app/app/awesome-component/awesome-component.component';
import { ChildAwesomeComponentComponent } from '@app/app/child-awesome-component/child-awesome-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AwesomeComponentComponent, ChildAwesomeComponentComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [AwesomeComponentComponent],
  exports: [AwesomeComponentComponent, ChildAwesomeComponentComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const el = createCustomElement(AwesomeComponentComponent, { injector });
    customElements.define('awesome-component', el);
  }
  ngDoBootstrap() {}
}
