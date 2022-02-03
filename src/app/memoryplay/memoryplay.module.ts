import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryplayRoutingModule } from './memoryplay-routing.module';
import { MemoryN1Component } from './memory-n1/memory-n1.component';
import { MemoryN2Component } from './memory-n2/memory-n2.component';


@NgModule({
  declarations: [
    MemoryN1Component,
    MemoryN2Component
  ],
  imports: [
    CommonModule,
    MemoryplayRoutingModule
  ]
})
export class MemoryplayModule { }
