import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelApiServiceService} from '../marvel-api-service.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  itemsList: Object[];
  private paginationOffset = 48;
  currentCategory: string;
  private totalAvailableItems: number;
  nextBlocked = true;

  constructor(private route: ActivatedRoute,
              private apiService: MarvelApiServiceService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.itemsList = data.itemsList.data.results;
      this.currentCategory = this.route.snapshot.paramMap.get('itemName');
      this.totalAvailableItems = data.itemsList.data.total;
      // console.log(data.itemsList);
    });
  }

  getImagePath(url: string) {
    return `${url}/portrait_fantastic.jpg`;
  }

  getNextPage() {
    this.nextBlocked = false;
    this.apiService.getList(this.currentCategory, this.paginationOffset.toString()).subscribe( data => {
      this.itemsList = this.itemsList.concat(data['data']['results']);

      // this.itemsList = [...this.itemsList, ...data['data']['results']];

      this.paginationOffset += 48;

      this.nextBlocked = this.paginationOffset < this.totalAvailableItems;
    });
  }

}
