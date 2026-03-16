import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiHugo } from '../../interface/api-hugo';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {

  @Input() apiList: ApiHugo[] = [];

  @Output() favorite = new EventEmitter<ApiHugo>();

  sendFavorite(ep: ApiHugo){
    this.favorite.emit(ep);
  }

}