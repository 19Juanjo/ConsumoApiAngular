import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiHugo } from '../../interface/api-hugo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() api!: ApiHugo;

  @Output() favorite = new EventEmitter<ApiHugo>();

  addFavorite(){
    this.favorite.emit(this.api);
  }

}