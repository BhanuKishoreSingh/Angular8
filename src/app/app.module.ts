import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppComponent } from './app.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, CdkStepperModule ],
  declarations: [ AppComponent, CustomStepperComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
