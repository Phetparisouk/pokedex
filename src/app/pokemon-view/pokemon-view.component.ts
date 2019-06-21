import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
  pokemons: any[];

  /*lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });*/

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  	this.pokemons=this.pokemonService.pokemons;
  }

  onCatch() {
    this.pokemonService.switchCatchAll();
  }

  onNotCatch() {
    if(confirm('Etes-vous sûr de vouloir libérer tous vos Pokemons ??')) {
      this.pokemonService.switchNotCatchAll();
    } else {
      return null;
    }
  }
}
