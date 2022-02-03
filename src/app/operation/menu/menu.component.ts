import { Component, OnInit } from '@angular/core';
/*interface selecItem{
  ruta:string,
  texto:string
  }*/
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /*selec:selecItem[] = [
    {ruta:'/operation/sum',texto:'sum'},
    {ruta:'/operation/subtraction',texto:'subtraction'}
  ];*/
  constructor() { }

  ngOnInit(): void {
  }

}
