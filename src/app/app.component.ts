import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api-hugo.service';
import { ApiHugo } from './interface/api-hugo';
import { Character } from './interface/Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  characters: Character[] = [];
  apis: ApiHugo[] = [];
  filteredEpisodes: ApiHugo[] = [];

  favorites: ApiHugo[] = [];

  searchText = '';
  selectedSeason = 0;

  seasons = [1,2,3,4,5,6,7,8,9];

  constructor(private apiService: ApiService){}

  ngOnInit(){

    const stored = localStorage.getItem('favorites');
    if(stored){
      this.favorites = JSON.parse(stored);
    }

    this.apiService.getSerie().subscribe(data=>{
      this.apis = data;
      this.filteredEpisodes = data;
    });

    this.apiService.getCharacter().subscribe(data =>{
      this.characters = data;
    });

  }

  applyFilters(){

  let result = [...this.apis];

  const season = Number(this.selectedSeason);

  if(season !== 0){
    result = result.filter(ep => ep.season === season);
  }

  if(this.searchText.trim() !== ''){

    const search = this.searchText.toLowerCase();

    result = result.filter(ep =>
      ep.name.toLowerCase().includes(search) ||
      (ep.summary && ep.summary.toLowerCase().includes(search))
    );

  }

  this.filteredEpisodes = [...result];

}

  toggleFavorite(ep: ApiHugo){

    const index = this.favorites.findIndex(f => f.id === ep.id);

    if(index === -1){
      this.favorites.push(ep);
    } else {
      this.favorites.splice(index,1);
    }

    localStorage.setItem('favorites', JSON.stringify(this.favorites));

  }

}