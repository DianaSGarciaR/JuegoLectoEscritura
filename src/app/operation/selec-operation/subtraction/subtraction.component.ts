import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';
@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) {

    _loadScript.load(["js/date/subtraction"]);

  }

  ngOnInit(): void {
  }

}
