import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { MyTwoWayBindingComponent } from './my-two-way-binding/my-two-way-binding.component';
import { MyDyanmicImageComponent } from './my-dyanmic-image/my-dyanmic-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingPracticeComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    MyTwoWayBindingComponent,
    MyDyanmicImageComponent
  ],
  imports: [
    BrowserModule,
   FormsModule,
   HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
