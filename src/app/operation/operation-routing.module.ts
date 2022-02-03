import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelecOperationComponent } from './selec-operation/selec-operation.component';
import { SubtractionComponent } from './selec-operation/subtraction/subtraction.component';
import { SumComponent } from './selec-operation/sum/sum.component';

const routes: Routes = [
  {
    path:'', 
    children: [
      {path: 'sum', component: SumComponent},
      {path:'subtraction', component: SubtractionComponent},
      {path:'selec-operation', component:SelecOperationComponent},
      {path:'**', redirectTo:''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationRoutingModule { }
