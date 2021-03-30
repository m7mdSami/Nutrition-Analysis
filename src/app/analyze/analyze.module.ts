import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzeRoutingModule } from './analyze-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [HomeComponent, ResultComponent],
  imports: [
    CommonModule,
    AnalyzeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AnalyzeModule { }
