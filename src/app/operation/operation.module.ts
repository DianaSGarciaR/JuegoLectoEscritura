import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationRoutingModule } from './operation-routing.module';

import { SelecOperationComponent } from './selec-operation/selec-operation.component';
import { SumComponent } from './selec-operation/sum/sum.component';
import { SubtractionComponent } from './selec-operation/subtraction/subtraction.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    SumComponent,
    SubtractionComponent,
    SelecOperationComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    OperationRoutingModule
  ]
})
export class OperationModule { }
