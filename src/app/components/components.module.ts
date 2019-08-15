import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent,
    SourcesComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NoticiasComponent,
    NoticiaComponent,
    SourcesComponent
  ]
})
export class ComponentsModule { }
