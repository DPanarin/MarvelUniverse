import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiServiceService} from '../marvel-api-service.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {

  creator: Object;

  constructor(private route: ActivatedRoute,
              private apiService: MarvelApiServiceService) { }

  ngOnInit() {
    this.route.data.subscribe( data => {
      this.creator = data.item.data.results[0];
      console.log(this.creator);
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

}
