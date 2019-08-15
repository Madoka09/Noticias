import { Component, ViewChild } from '@angular/core';
import { Source } from 'src/app/interfaces/sources';
import { IonInfiniteScroll, IonSegment } from '@ionic/angular';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  sources: Source[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(){
    this.fetchSources();
  }

  fetchSources() {
    this.noticiasService.getSources()
    .subscribe(providers => {
      console.log("Cagadas...", providers);
      this.sources.push(...providers.sources);
    });
  }
}
