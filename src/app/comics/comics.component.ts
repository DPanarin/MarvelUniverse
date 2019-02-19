import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiServiceService} from '../marvel-api-service.service';
import {Comics} from '../comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics: Object;
  private onSaleDate: number;

  constructor(private route: ActivatedRoute,
              private apiService: MarvelApiServiceService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.comics = data.item.data.results[0];
      console.log(this.comics);
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

  getItemId(url: string) {
    const urlArray = url.split('/');
    return urlArray[urlArray.length - 1];
  }

  getOnSale() {
    this.onSaleDate = new Date (this.comics['dates'].find(date => date.type === 'onsaleDate').date).getFullYear();
    return this.onSaleDate;
  }

}
