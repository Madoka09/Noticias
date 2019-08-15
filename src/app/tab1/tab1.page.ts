import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import {Article} from '../interfaces/interfaces';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  articulos: Article[] = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonSegment) segment;

  @ViewChild('search') search;
  constructor(private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.getDefaultNews();
  }

  loadData(event) {
    setTimeout(() => {
      this.fetchNews(this.search.value);
      event.target.complete();
      if(this.articulos.length === 700){
        event.target.disabled = true;
      }
    }, 500);
  }

  fetchNews(search: string, event?) {
    this.noticiasService.getNoticiasEv(search)
    .subscribe(noticias => {
      this.articulos.push(...noticias.articles);
    });
  }

  getDefaultNews(){
    this.noticiasService.getNoticias()
    .subscribe(noticias=>{
      console.log("Noticias...",noticias);
      this.articulos.push(...noticias.articles);
    });
  }

  clear() {
    this.articulos.length = 0;
    this.fetchNews(this.search.value);
  }
}
