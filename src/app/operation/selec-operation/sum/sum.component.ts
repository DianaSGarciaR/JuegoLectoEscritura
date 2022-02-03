import { Component, OnInit } from '@angular/core';
import { LoadGraphService } from 'src/app/load-graph.service';
@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  constructor(private _loadScript:LoadGraphService) {

    _loadScript.load(["js/date/suma"]);

  }

  ngOnInit(): void {
  }

}
