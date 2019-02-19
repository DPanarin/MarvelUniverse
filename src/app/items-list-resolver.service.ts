import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {MarvelApiServiceService} from './marvel-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsListResolverService implements Resolve<any> {

  constructor(private apiService: MarvelApiServiceService,
              private activatedRoute: ActivatedRoute) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getList(route.paramMap.get('itemName'));
  }
}
