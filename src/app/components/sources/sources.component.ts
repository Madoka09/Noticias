import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'src/app/interfaces/sources';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss'],
})
export class SourcesComponent implements OnInit {
  @Input() sources: Source[] = [];
  constructor() { }

  ngOnInit() {}

}
