import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ChildComponentTowComponent } from './child-component-tow/child-component-tow.component';
import { ChildParentComponent } from './child-parent/child-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    ChildComponentTowComponent,
    ChildParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
