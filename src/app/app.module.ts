import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPracticeComponent,
    MyEventBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
