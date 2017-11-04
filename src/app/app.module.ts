import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPracticeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
