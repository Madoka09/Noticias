import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { RespuestaSources } from '../interfaces/sources';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

let headers = new HttpHeaders({
  'X-Api-key': apiKey
})

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {
  actualCategory = "";
  page = 0;
  constructor(private http: HttpClient) { }

  llamarAPI<T>(query){
    query = apiUrl + query
    return this.http.get<T>(query, {headers: headers});
  }

  getNoticias(){
    //return this.http.get<RespuestaNoticias>('https://newsapi.org/v2/top-headlines?country=us&=${category}apiKey=392dc7872db4469aa3cdbf87a5dd35ba');
    return this.llamarAPI<RespuestaNoticias>('/top-headlines?country=us');
  }

  getNoticiasCat(category){
    let pagen = 0;
    if(this.actualCategory != category){
      this.actualCategory = category;
      this.page = 0;
    } else {
      this.page += 1;
    }
    pagen = this.page*5;
    return this.llamarAPI<RespuestaNoticias>('/top-headlines?country=us&category=' + category + '&pageSize=5&page=' + pagen);
  }

  getNoticiasEv(search){
    let pagen = 0;
    this.page += 1;

    pagen = this.page + 1;
    return this.llamarAPI<RespuestaNoticias>('/everything?q=' + search + '&pageSize=5&page=' + pagen);
  }

  getSources() {
    let pagen = 0;
    this.page += 1;

    pagen = this.page + 1;
    return this.llamarAPI<RespuestaSources>('/sources?&page=' + pagen);
  }

}
