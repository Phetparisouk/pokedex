import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.scss']
})
export class OnePokemonComponent implements OnInit {

  name: String='Pokemon';
  status: String='Status';
  commentaire:String='Commentaire';
  type:String='Type';
  taille:String='Taille';

  constructor(private pokemonService: PokemonService, 
  				private route: ActivatedRoute) { 

  }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
  	this.name=this.pokemonService.getPokemonById(+id).name;
  	this.type=this.pokemonService.getPokemonById(+id).type;
  	this.status=this.pokemonService.getPokemonById(+id).status;
  	this.commentaire=this.pokemonService.getPokemonById(+id).commentaire;
  	this.taille=this.pokemonService.getPokemonById(+id).taille;

  }

}
