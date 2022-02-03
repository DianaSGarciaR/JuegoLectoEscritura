import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadGraphService } from 'src/app/load-graph.service';

@Component({
  selector: 'app-memorama-game',
  templateUrl: './memorama-game.component.html',
  styleUrls: ['./memorama-game.component.css']
})
export class MemoramaGameComponent implements OnInit {



  constructor(private _loadScripts:LoadGraphService) {
    _loadScripts.load(["memoramajs/g-cartas"]);
   }

  ngOnInit(): void {
  }
}

export interface MemoramaGameComponent { imageId: string; state: 'default' | 'flipped' | 'matched'; }

