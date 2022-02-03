import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';
@Component({
  selector: 'app-writing-game',
  templateUrl: './writing-game.component.html',
  styleUrls: ['./writing-game.component.css']
})
export class WritingGameComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) {

    _loadScript.load(["js/date/writing"]);

  }

  ngOnInit(): void {
  }

}
