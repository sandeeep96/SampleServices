import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { CustomComp1Component } from './custom-comp1/custom-comp1.component';
import { CustomServiceService } from './custom-service.service';
import { CustomComp2Component } from './custom-comp2/custom-comp2.component';

@NgModule({
  imports: [
    CommonModule,BrowserModule, HttpModule, FormsModule
  ],
  declarations: [CustomComp1Component, CustomComp2Component],
  providers: [CustomServiceService],
  //exports:[CustomComp1Component]
})
export class CustomModuleModule { }
