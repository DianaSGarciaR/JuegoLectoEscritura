import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-memorama-game',
  templateUrl: './memorama-game.component.html',
  styleUrls: ['./memorama-game.component.css']
  
  
})
export class MemoramaGameComponent implements OnInit {

    cartas:any [] = [
    {
      adelante: './assets/Bee.png',
      atras: './assets/huella.png'
    },
    {
      adelante: './assets/Bear.png',
      atras: './assets/huella.png'
    },
    {
      adelante: './assets/Cow.png',
      atras: './assets/huella.png'
    }
  ];
  

  cartaS:any = {};
  TablaD:any = {};
 // cartaF:any = {};
  crear:any = {};
  constructor( private ruta:Router, private _loadScripts:LoadGraphService)
  {

    this.crear = crear();
   
    //this.cartaF = servicioCarta.Tabla();
   // this.cartaS =servicioCarta.RecuparaId();
    /*this.ruta.params.subscribe(params =>{
      console.log(params.id)
    });*/
    _loadScripts.load(["memoramajs/g-cartas"]);

    function crear(){
      let tabla="<table border=\"0\">";
      
      tabla+="<tr><td></td>";
      for(let j=0;j<4;j++){ 
          tabla+="<td>"+(j+1)+ "</td>";
      }
      tabla+="</tr>";
      
      for(let i=0;i<5;i++){
          tabla+="<tr>";
          tabla+="<td>"+(i+1)+ "</td>";
          for(let j=0;j<5;j++){ 
              tabla+="<td>"+"<input type=\"text\" size=\"1\">"+ "</td>";
          }
          tabla+="</tr>";
      }
      tabla+="</table>";
      
  }
  
   }

  ngOnInit(): void {
  }

  recuperaruta(id:number){
    this.ruta.navigate((['/memorama-game',id]))
  }

}

export interface MemoramaGameComponent { imageId: string; state: 'default' | 'flipped' | 'matched'; }

