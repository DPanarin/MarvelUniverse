import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Character} from '../character';
import {MarvelApiServiceService} from '../marvel-api-service.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Object;

  constructor(private route: ActivatedRoute,
              private apiService: MarvelApiServiceService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.character = data.item.data.results[0];
      console.log(this.character);
    });
  }

  getImagePath(url: string) {
    return `${url}/detail.jpg`;
  }

  getDetails() {
    this.apiService.getSmth().subscribe( data => {
      console.log(data);
    });
  }

  getComicsId(url: string) {
    const urlArray = url.split('/');
    return urlArray[urlArray.length - 1];
  }

}
