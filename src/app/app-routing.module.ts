import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListComponent} from './items-list/items-list.component';
import {ItemsListResolverService} from './items-list-resolver.service';
import {ItemComponent} from './item/item.component';
import {ItemResolverService} from './item-resolver.service';
import {CharacterComponent} from './character/character.component';
import {ComicsComponent} from './comics/comics.component';
import {CreatorComponent} from './creator/creator.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'characters',
      pathMatch: 'full'
    },
    {
      path: ':itemName',
      component: ItemsListComponent,
      resolve: {
        itemsList: ItemsListResolverService
      }
    },
    {
      path: 'characters/:id',
      component: CharacterComponent,
      resolve: {
        item: ItemResolverService
      }
    },
    {
      path: 'comics/:id',
      component: ComicsComponent,
      resolve: {
        item: ItemResolverService
      }
    },
    {
      path: 'creators/:id',
      component: CreatorComponent,
      resolve: {
        item: ItemResolverService
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
