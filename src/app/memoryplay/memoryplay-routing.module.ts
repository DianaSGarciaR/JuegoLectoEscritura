import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryN2Component } from './memory-n2/memory-n2.component';

const routes: Routes = [
  {path: '',children:[
    {
      path:'memoryN2', component: MemoryN2Component
    }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoryplayRoutingModule { }
