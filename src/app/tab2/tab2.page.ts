import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaNoticias, Article } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { NoticiasService } from '../services/noticias.service';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  @ViewChild(IonSegment) segment;

  articulos: Article[] = [];
  categorias: string[] =['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']
  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(){
    this.segment.value = this.categorias[0];
  }

  setNoticias(){
    this.articulos.length = 0;
    this.noticiasService.getNoticiasCat(this.segment.value)
    .subscribe(noticias => {
      console.log(noticias);
      console.log(this.segment.value);
      this.articulos.push(...noticias.articles);
    })
  }
}
