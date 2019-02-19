import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MarvelApiServiceService} from './marvel-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolverService implements Resolve<any> {

  constructor(private apiService: MarvelApiServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const category = route.url[0].toString();
    const itemId = route.paramMap.get('id');
    return this.apiService.getItem(category, itemId);
  }
}
