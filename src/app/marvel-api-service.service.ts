import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiServiceService {

  baseUrl = 'https://gateway.marvel.com/v1/public/';

  constructor(private http: HttpClient) { }

  getList(itemName: string, offset?: string) {
    return this.http.get(`${this.baseUrl}${itemName}`, { params: { offset: offset}});
  }

  getItem(category: string, itemId: string) {
    return this.http.get(`${this.baseUrl}/${category}/${itemId}`);
  }

  getSmth() {
    return this.http.get('http://gateway.marvel.com/v1/public/characters/1010370/comics', {params: {characterId: '1010370'}});
  }
}
