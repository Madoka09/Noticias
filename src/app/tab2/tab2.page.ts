import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //@ViewChild(IonSegment) segment;
  categorias: string[] =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  constructor() {}

  /*ngOnInit(){
    this.segment.value = this.categorias[0];
  }

  */
}
