import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';
@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) {

    _loadScript.load(["js/date/suma"]);

  }

  ngOnInit(): void {
  }

}
