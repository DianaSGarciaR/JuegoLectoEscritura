import { Component, OnInit } from '@angular/core';
interface selecItem{
  ruta:string,
  texto:string
  }
@Component({
  selector: 'app-selec-operation',
  templateUrl: './selec-operation.component.html',
  styleUrls: ['./selec-operation.component.css']
})
export class SelecOperationComponent implements OnInit {
  selec:selecItem[] = [
    {ruta:'/operation/sum',texto:'sum'},
    {ruta:'/operation/subtraction',texto:'subtraction'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
