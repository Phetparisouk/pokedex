import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Routes, Router , RouterModule} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemonName: string;
  @Input() pokemonType: string;
  @Input() pokemonTaille: number;
  @Input() pokemonStatus: string;
  @Input() pokemonCommentaire: string;
  @Input() index: number;
  @Input() id: number;
  @Input() image: string;

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit() {
  }

  getStatus() {
    return this.pokemonStatus;
  }
 deletePokemonser(id) {
     this.pokemonService.deletePokemon(this.index);
  }
  getColor() {
    if (this.pokemonStatus === 'oui') {
      return 'green';
    } else if (this.pokemonStatus === 'non') {
      return 'purple';
    }
  }
  onSwitch() {
    if (this.pokemonStatus === 'oui') {
      this.pokemonService.switchNotCatchOne(this.index);
    } else if (this.pokemonStatus === 'non') {
      this.pokemonService.switchCatchOne(this.index);
    }
  }
}
